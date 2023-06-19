import { NDArray } from './';
import { array } from './array';
import { NDIter } from '../iterators';

const { log2: f } = Math;

/**
 * @static
 * @memberof vectorious
 * @function log2
 * @description Returns the base 2 logarithm of each element of `x`.
 * @param {NDArray} x
 * @returns {NDArray}
 * @example
 * import { log2 } from 'vectorious/core/log2';
 *
 * log2([1, 2, 4]); // => array([0, 1, 2])
 */
export const log2 = (x: NDArray | ArrayLike<any>): NDArray => array(x).log2();

export default function (this: NDArray): NDArray {
  const { data: d1 } = this;
  const iter = new NDIter(this);

  for (const i of iter) {
    d1[i] = f(d1[i]);
  }

  return this;
}
