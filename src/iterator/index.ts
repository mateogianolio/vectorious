import { NDArray } from '../';
import { array } from '../core/array';

export const V_MAXDIMS = 32;

/**
 * @class NDIter
 * @description Constructs an NDIter instance.
 * @param {NDArray} x
 */
export class NDIter implements Iterator<number[]> {
  /**
   * @name x
   * @memberof NDIter.prototype
   * @type NDArray
   */
  public x: NDArray;

  /**
   * @name shape
   * @memberof NDIter.prototype
   * @type Number[]
   */
  public shape: number[];

  /**
   * @name shapem1
   * @memberof NDIter.prototype
   * @type Number[]
   */
  public shapem1: number[];

  /**
   * @name strides
   * @memberof NDIter.prototype
   * @type Number[]
   */
  public strides: number[];

  /**
   * @name backstrides
   * @memberof NDIter.prototype
   * @type Number[]
   */
  public backstrides: number[];

  /**
   * @name length
   * @memberof NDIter.prototype
   * @type Number
   */
  public length: number;

  /**
   * @name lengthm1
   * @memberof NDIter.prototype
   * @type Number
   */
  public lengthm1: number;

  /**
   * @name nd
   * @memberof NDIter.prototype
   * @type Number
   */
  public nd: number;

  /**
   * @name ndm1
   * @memberof NDIter.prototype
   * @type Number
   */
  public ndm1: number;

  /**
   * @name index
   * @memberof NDIter.prototype
   * @type Number
   */
  public index: number;

  /**
   * @name coords
   * @memberof NDIter.prototype
   * @type Number[]
   */
  public coords: number[];

  /**
   * @name pos
   * @memberof NDIter.prototype
   * @type Number
   */
  public pos: number;

  /**
   * @name factors
   * @memberof NDIter.prototype
   * @type Number[]
   */
  public factors: number[];

  /**
   * @name contiguous
   * @memberof NDIter.prototype
   * @type Boolean
   */
  public contiguous: boolean;

  constructor(x: NDArray | ArrayLike<any>) {
    const {
      shape,
      strides,
      length,
    } = array(x);

    this.x = array(x);
    this.length = length;
    this.lengthm1 = length - 1;
    this.nd = shape.length;
    this.ndm1 = this.nd - 1;

    this.shape = Array(V_MAXDIMS).fill(0);
    this.strides = Array(V_MAXDIMS).fill(0);
    this.shapem1 = Array(V_MAXDIMS).fill(0);
    this.coords = Array(V_MAXDIMS).fill(0);
    this.backstrides = Array(V_MAXDIMS).fill(0);
    this.factors = Array(V_MAXDIMS).fill(0);

    if (this.nd !== 0) {
      this.factors[this.nd - 1] = 1;
    }

    this.contiguous = true;

    let stride = 1;
    let i;
    for (i = 0; i < this.nd; i += 1) {
      this.shape[i] = shape[i];
      this.shapem1[i] = shape[i] - 1;
      this.strides[i] = strides[i];
      this.backstrides[i] = strides[i] * this.shapem1[i];
      this.coords[i] = 0;

      // Check if C-contiguous
      if (shape[this.nd - i - 1] !== 1) {
        if (strides[i] !== stride) {
          this.contiguous = false;
        }

        stride *= shape[this.nd - i - 1];
      }

      if (i > 0) {
        this.factors[this.nd - i - 1] = this.factors[this.nd - i] * shape[this.nd - i];
      }
    }

    this.index = 0;
    this.pos = 0;
  }

  /**
   * @function done
   * @memberof NDIter.prototype
   * @description Returns true if the iterator is done, false otherwise
   * @returns {Boolean}
   * @example
   * import { array } from 'vectorious/core/array';
   * import { NDIter } from 'vectorious/iterator';
   * 
   * const iter = new NDIter(array([1, 2, 3]));
   * iter.done(); // false
   */
  done() {
    return this.index > this.lengthm1;
  }

  /**
   * @function current
   * @memberof NDIter.prototype
   * @description Returns the current element of the iterator
   * @returns {Object} current
   * @returns {Number} [current.value]
   * @returns {Boolean} current.done
   * @example
   * import { array } from 'vectorious/core/array';
   * import { NDIter } from 'vectorious/iterator';
   * 
   * const iter = new NDIter(array([1, 2, 3]));
   * iter.current(); // { value: 1, done: false }
   */
  current(): IteratorResult<number[] | any> {
    const done = this.done();
    return {
      value: done ? undefined : this.pos,
      done,
    }
  }

  /**
   * @function next1d
   * @memberof NDIter.prototype
   * @description Steps to the next position in the iterator, assuming it is 1 dimensional.
   */
  next1d() {
    const {
      strides,
      coords,
    } = this;

    this.pos += strides[0];
    coords[0] += 1;
  }

  /**
   * @function nextcontiguous
   * @memberof NDIter.prototype
   * @description Steps to the next position in the iterator, assuming its data is contiguous.
   */
  nextcontiguous() {
    this.pos += 1;
  }

  /**
   * @function next2d
   * @memberof NDIter.prototype
   * @description Steps to the next position in the iterator, assuming it is 2 dimensional.
   */
  next2d() {
    const {
      coords,
      strides,
      shapem1,
      backstrides,
    } = this;

    if (coords[1] < shapem1[1]) {
      coords[1] += 1;
      this.pos += strides[1];
    } else {
      coords[1] = 0;
      coords[0] += 1;
      this.pos += strides[0] - backstrides[1];
    }
  }

  /**
   * @function next2d
   * @memberof NDIter.prototype
   * @description Steps to the next position in the iterator
   */
  nextnd() {
    const {
      ndm1,
      shapem1,
      coords,
      strides,
      backstrides,
    } = this;

    let i;
    for (i = ndm1; i >= 0; i -= 1) {
      if (coords[i] < shapem1[i]) {
        coords[i] += 1;
        this.pos += strides[i];
        break;
      } else {
        coords[i] = 0;
        this.pos -= backstrides[i];
      }
    }
  }

  /**
   * @function next
   * @memberof NDIter.prototype
   * @description
   * Steps to the next position in the iterator.
   * Returns the current index of the iterator, or undefined if done.
   * @returns {Object}
   * @example
   * import { array } from 'vectorious/core/array';
   * import { NDIter } from 'vectorious/iterator';
   * 
   * const iter = new NDIter(array([1, 2, 3]));
   * iter.next(); // { value: 2, done: false }
   * iter.next(); // { value: 3, done: false }
   * iter.next(); // { done: true }
   */
  next() {
    const current = this.current();

    this.index += 1;

    const {
      ndm1,
      contiguous,
    } = this;

    if (ndm1 === 0) {
      this.next1d();
    } else if (contiguous) {
      this.nextcontiguous();
    } else if (ndm1 === 1) {
      this.next2d();
    } else {
      this.nextnd();
    }

    return current;
  }

  [Symbol.iterator]() {
    return this;
  }
}

/**
 * @class NDMultiIter
 * @description Constructs an NDMultiIter instance.
 * @param {NDArray[]} ...args
 */
export class NDMultiIter implements Iterator<number[]> {
  /**
   * @name iters
   * @memberof NDMultiIter.prototype
   * @type NDIter[]
   */
  public iters: NDIter[];

  /**
   * @name shape
   * @memberof NDMultiIter.prototype
   * @type Number[]
   */
  public shape: number[];

  /**
   * @name nd
   * @memberof NDMultiIter.prototype
   * @type Number
   */
  public nd: number;

  /**
   * @name length
   * @memberof NDMultiIter.prototype
   * @type Number
   */
  public length: number;

  /**
   * @name lengthm1
   * @memberof NDMultiIter.prototype
   * @type Number
   */
  public lengthm1: number;

  /**
   * @name numiter
   * @memberof NDMultiIter.prototype
   * @type Number
   */
  public numiter: number;

  /**
   * @name index
   * @memberof NDMultiIter.prototype
   * @type Number
   */
  public index: number;

  /**
   * @name pos
   * @memberof NDMultiIter.prototype
   * @type Number[]
   */
  public pos: number[];

  constructor(...args: (NDArray | ArrayLike<any>)[]) {
    this.iters = args.map(arg => new NDIter(arg));
    this.numiter = args.length;

    let i;
    let nd;
    for (i = 0, nd = 0; i < this.numiter; i += 1) {
      nd = Math.max(nd, this.iters[i].x.shape.length);
    }

    this.nd = nd;
    this.shape = Array(nd).fill(0);

    let it;
    let j;
    let k;
    let tmp;
    for (i = 0; i < nd; i += 1) {
      this.shape[i] = 1;
      for (j = 0; j < this.numiter; j += 1) {
        it = this.iters[j];
        k = i + it.x.shape.length - nd;
        if (k >= 0) {
          tmp = it.x.shape[k];
          if (tmp == 1) {
            continue;
          }
          if (this.shape[i] == 1) {
            this.shape[i] = tmp;

          } else if (this.shape[i] !== tmp) {
            throw new Error('shape mismatch');
          }
        }
      }
    }

    tmp = this.shape.reduce((acc, dim) => acc * dim, 1);

    this.length = tmp;
    this.lengthm1 = tmp - 1;

    for (i = 0; i < this.numiter; i += 1) {
      it = this.iters[i];
      it.nd = this.nd;
      it.ndm1 = this.nd - 1;
      it.length = tmp;
      it.lengthm1 = tmp - 1;

      nd = it.x.shape.length;
      if (nd !== 0) {
        it.factors[this.nd - 1] = 1;
      }

      for (j = 0; j < this.nd; j += 1) {
        it.shape[j] = this.shape[j];
        it.shapem1[j] = this.shape[j] - 1;
        k = j + nd - this.nd;

        if ((k < 0) || it.x.shape[k] !== this.shape[j]) {
          it.contiguous = false;
          it.strides[j] = 0;
        } else {
          it.strides[j] = it.x.strides[k];
        }

        it.backstrides[j] = it.strides[j] * it.shapem1[j];

        if (j > 0) {
          it.factors[this.nd - j - 1] = it.factors[this.nd - j] * this.shape[this.nd - j]
        }
      }
    }

    this.index = 0;
    this.pos = Array(this.numiter).fill(0);
  }

  /**
   * @function done
   * @memberof NDMultiIter
   * @description Returns true if the iterator is done, false otherwise
   * @returns {Boolean}
   * @example
   * import { array } from 'vectorious/core/array';
   * import { NDMultiIter } from 'vectorious/iterator';
   * 
   * const iter = new NDMultiIter(array([1, 2, 3]), array([4, 5, 6]));
   * iter.done(); // false
   */
  done() {
    return this.index > this.lengthm1;
  }

  /**
   * @function current
   * @memberof NDMultiIter
   * @description Returns the current indices of the iterators
   * @returns {Object} current
   * @returns {Number[]} [current.value]
   * @returns {Boolean} current.done
   * @example
   * import { array } from 'vectorious/core/array';
   * import { NDMultiIter } from 'vectorious/iterator';
   * 
   * const iter = new NDMultiIter(array([1, 2, 3]), array([4, 5, 6]));
   * iter.current(); // { value: [0, 0], done: false }
   */
  current(): IteratorResult<number[] | any> {
    const done = this.done();
    return {
      value: done ? undefined : this.pos,
      done,
    }
  }

  /**
   * @function next
   * @memberof NDMultiIter
   * @description
   * Steps to the next position in the iterator.
   * Returns the current indices of the iterators, or undefined if done.
   * @returns {Object} current
   * @returns {Number[]} [current.value]
   * @returns {Boolean} current.done
   * @example
   * import { array } from 'vectorious/core/array';
   * import { NDMultiIter } from 'vectorious/iterator';
   * 
   * const iter = new NDMultiIter(array([1, 2, 3]), array([4, 5, 6]));
   * iter.next(); // { value: [0, 0], done: false }
   * iter.next(); // { value: [1, 1], done: false }
   * iter.next(); // { value: [2, 2], done: false },
   * iter.next(); // { value: undefined, done: true },
   */
  next() {
    const current = this.current();

    this.index += 1;

    const {
      numiter,
    } = this;

    let it;
    let i;
    for (i = 0; i < numiter; i += 1) {
      it = this.iters[i];
      this.pos[i] = it.pos;
      it.next();
    }

    return current;
  }

  [Symbol.iterator]() {
    return this;
  }
}
