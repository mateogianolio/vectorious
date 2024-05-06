import { NDArray } from './';
import { NDMultiIter } from '../iterators';
import { array } from './array';
import * as blas from '../blas';

/**
 * @static
 * @memberof vectorious
 * @function dot
 * @description
 * Performs dot multiplication with `x` and `y`.
 * Accelerated with BLAS `?dot`.
 * @param {NDArray} x
 * @param {NDArray} y
 * @returns {Number}
 * @example
 * import { dot } from 'vectorious/core/dot';
 *
 * dot([1, 2, 3], [4, 5, 6]); // => 32
 */
export const dot = (x: NDArray | ArrayLike<any>, y: NDArray | ArrayLike<any>): number =>
  array(x).dot(array(y));

export default function (this: NDArray, x: NDArray): number {
  const { data: d1, length: l1, strides: st1, dtype } = this;
  const { data: d2, strides: st2 } = x;

  let result: number = 0;
  try {
    const inc_x = st2[st2.length - 1];
    const inc_y = st1[st1.length - 1];

    if (inc_x !== inc_y) {
      throw new Error('inc_x and inc_y must be equal');
    }

    result = blas.dot(dtype, l1, d2, inc_x, d1, inc_y);
  } catch (err) {
    const iter = new NDMultiIter(this, x);

    for (const [i, j] of iter) {
      result += d1[i] * d2[j];
    }
  }

  return result;
}
