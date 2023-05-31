import { NDArray } from '..';
import { NDIter } from './single';

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
    this.iters = args.map((arg) => new NDIter(arg));
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

        if (k < 0 || it.x.shape[k] !== this.shape[j]) {
          it.strides[j] = 0;
        } else {
          it.strides[j] = it.x.strides[k];
        }

        it.backstrides[j] = it.strides[j] * it.shapem1[j];

        if (j > 0) {
          it.factors[this.nd - j - 1] = it.factors[this.nd - j] * this.shape[this.nd - j];
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
    };
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
    if (current.done) {
      return current;
    }

    this.index += 1;

    const { numiter } = this;

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
