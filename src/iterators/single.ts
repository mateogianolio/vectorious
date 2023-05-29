import { NDArray } from '..';
import { array } from '../core/array';
import { V_MAXDIMS } from '../util';

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

  constructor(x: NDArray | ArrayLike<any>) {
    this.x = array(x);
    const { shape, strides, length } = this.x;

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

    let i;
    for (i = 0; i < this.nd; i += 1) {
      this.shape[i] = shape[i];
      this.shapem1[i] = shape[i] - 1;
      this.strides[i] = strides[i];
      this.backstrides[i] = strides[i] * this.shapem1[i];
      this.coords[i] = 0;

      if (i > 0) {
        this.factors[this.ndm1 - i] = this.factors[this.nd - i] * shape[this.nd - i];
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
    };
  }

  /**
   * @function next1d
   * @memberof NDIter.prototype
   * @description Steps to the next position in the iterator, assuming it is 1 dimensional.
   */
  next1d() {
    const { strides } = this;

    this.pos += strides[0];
    this.coords[0] += 1;
  }

  /**
   * @function next2d
   * @memberof NDIter.prototype
   * @description Steps to the next position in the iterator, assuming it is 2 dimensional.
   */
  next2d() {
    const { strides, shapem1, backstrides } = this;

    if (this.coords[1] < shapem1[1]) {
      this.coords[1] += 1;
      this.pos += strides[1];
    } else {
      this.coords[1] = 0;
      this.coords[0] += 1;
      this.pos += strides[0] - backstrides[1];
    }
  }

  /**
   * @function next2d
   * @memberof NDIter.prototype
   * @description Steps to the next position in the iterator
   */
  nextnd() {
    const { ndm1, shapem1, strides, backstrides } = this;

    let i;
    for (i = ndm1; i >= 0; i -= 1) {
      if (this.coords[i] < shapem1[i]) {
        this.coords[i] += 1;
        this.pos += strides[i];
        break;
      }

      this.coords[i] = 0;
      this.pos -= backstrides[i];
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

    const { ndm1 } = this;

    if (ndm1 === 0) {
      this.next1d();
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
