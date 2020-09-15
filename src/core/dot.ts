import { NDArray } from './';
import { NDMultiIter } from '../iterator';
import { array } from './array';
import * as blas from '../blas';

/**
 * @static
 * @memberof module:Globals
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

/**
 * @function dot
 * @memberof NDArray.prototype
 * @description
 * Performs dot multiplication with `x` and current array
 * Accelerated with BLAS `?dot`.
 * @param {NDArray} x
 * @returns {Number}
 * @example
 * import { array } from 'vectorious/core/array';
 * 
 * array([1, 2, 3]).dot([4, 5, 6]); // => 32
 */
export default function(this: NDArray, x: NDArray): number {
  const { data: d1, length: l1, dtype } = this;
  const { data: d2 } = x;

  let result: number = 0;
  try {
    result = blas.dot(dtype, l1, d2, 1, d1, 1);
  } catch (err) {
    const iter = new NDMultiIter(this, x);

    for (const [i, j] of iter) {
      result += d1[i] * d2[j];
    }
  }

  return result;
};
