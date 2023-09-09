import { TypedArray } from '../types';

import { NDArray } from './';
import { array } from './array';

/**
 * @static
 * @memberof vectorious
 * @function swap
 * @description Swaps two rows `i` and `j` in `x`.
 * @param {NDArray} x
 * @param {Number} i
 * @param {Number} j
 * @returns {NDArray}
 * @example
 * import { swap } from 'vectorious/core/swap';
 *
 * swap([[1, 2], [3, 4]], 0, 1); // => array([[3, 4], [1, 2]])
 */
export const swap = (x: NDArray | ArrayLike<any>, i: number, j: number): NDArray =>
  array(x).swap(i, j);

export default function (this: NDArray, i: number, j: number): NDArray {
  this.check(i, 0);
  this.check(j, 0);

  const { data: d1 } = this;
  const [, c] = this.shape;
  const d2: TypedArray = d1.slice(i * c, (i + 1) * c);

  d1.copyWithin(i * c, j * c, (j + 1) * c);
  d1.set(d2, j * c);

  return this;
}
