import { NDArray } from './';
import { array } from './array';
import * as lapack from '../lapack';

/**
 * @static
 * @memberof module:Globals
 * @function solve
 * @description
 * Solves the equation AX = B (where A is `x` and B is `y`).
 * Accelerated with LAPACK `?gesv`.
 * @param {NDArray} x
 * @param {NDArray} y
 * @returns {NDArray}
 * @example
 * import { solve } from 'vectorious/core/solve';
 *
 * solve([[1, 3, 5], [2, 4, 7], [1, 1, 0]], [[1], [3], [5]]); // => array([[3.25], [1.75], [-1.5]])
 */
export const solve = (x: NDArray | ArrayLike<any>, y: NDArray | ArrayLike<any>): NDArray =>
  array(x).solve(array(y));

/**
 * @function solve
 * @memberof NDArray.prototype
 * @description
 * Solves the equation AX = B (where A is current matrix and B is `x`).
 * Accelerated with LAPACK `?gesv`.
 * @param {NDArray} x
 * @returns {NDArray}
 * @example
 * import { array } from 'vectorious/core/array';
 *
 * array([[1, 3, 5], [2, 4, 7], [1, 1, 0]]).solve([[1], [3], [5]]); // => array([[3.25], [1.75], [-1.5]])
 */
export default function (this: NDArray, x: NDArray): NDArray {
  const { data: d1, dtype } = this;
  const {
    data: d2,
    shape: [n, nrhs],
  } = x;

  try {
    const ipiv: Int32Array = new Int32Array(n);
    lapack.gesv(dtype, n, nrhs, d1, n, ipiv, d2, nrhs);
  } catch (err) {
    const [LU, ipiv] = this.lu_factor();
    const { data: d1 } = LU;
    const { data: d2 } = x;

    let i: number;
    let j: number;
    let k: number;

    for (i = 0; i < ipiv.length; i += 1) {
      if (i !== ipiv[i] - 1) {
        x.swap(i, ipiv[i] - 1);
      }
    }

    for (k = 0; k < nrhs; k += 1) {
      for (i = 0; i < n; i += 1) {
        for (j = 0; j < i; j += 1) {
          d2[i * nrhs + k] -= d1[i * n + j] * d2[j * nrhs + k];
        }
      }

      for (i = n - 1; i >= 0; i -= 1) {
        for (j = i + 1; j < n; j += 1) {
          d2[i * nrhs + k] -= d1[i * n + j] * d2[j * nrhs + k];
        }

        d2[i * nrhs + k] /= d1[i * n + i];
      }
    }
  }

  return x;
}
