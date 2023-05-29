import { NDArray } from './';
import { array } from './array';
import { NDIter } from '../iterators';

const { log10: f } = Math;

/**
 * @static
 * @memberof module:Globals
 * @function log10
 * @description Returns the base 10 logarithm of each element of `x`.
 * @param {NDArray} x
 * @returns {NDArray}
 * @example
 * import { log10 } from 'vectorious/core/log10';
 *
 * log10([10, 100, 1000]); // => array([1, 2, 3])
 */
export const log10 = (x: NDArray | ArrayLike<any>): NDArray => array(x).log10();

/**
 * @function log10
 * @memberof NDArray.prototype
 * @description Returns the base 10 logarithm of each element of current array.
 * @returns {this}
 * @example
 * import { array } from 'vectorious/core/array';
 *
 * array([10, 100, 1000]).log10(); // <=> array([1, 2, 3])
 */
export default function (this: NDArray): NDArray {
  const { data: d1 } = this;
  const iter = new NDIter(this);

  for (const i of iter) {
    d1[i] = f(d1[i]);
  }

  return this;
}
