import { NDArray } from './';
import { array } from './array';
import * as lapack from '../lapack';

/**
 * @static
 * @memberof vectorious
 * @function lu_factor
 * @description
 * Performs LU factorization on `x`.
 * Accelerated with LAPACK `?getrf`.
 * @param {NDArray} x
 * @returns {Array<NDArray|Int32Array>}
 * @example
 * import { lu_factor } from 'vectorious/core/lu_factor';
 *
 * lu_factor([[1, 3, 5], [2, 4, 7], [1, 1, 0]]); // => [array([[2, 4, 7], [0.5, 1, 1.5], [0.5, -1, -2]]), Int32Array([2, 2, 3])]
 */
export const lu_factor = (x: NDArray | ArrayLike<any>): [NDArray, Int32Array] =>
  array(x).lu_factor();

export default function (this: NDArray): [NDArray, Int32Array] {
  const {
    data: d1,
    shape: [n],
    dtype,
  } = this;
  const ipiv: Int32Array = new Int32Array(n);

  try {
    lapack.getrf(dtype, n, n, d1, n, ipiv);
  } catch (err) {
    let max: number;
    let abs: number;
    let diag: number;
    let p: number;

    let i: number;
    let j: number;
    let k: number;
    for (k = 0; k < n; k += 1) {
      p = k;
      max = Math.abs(d1[k * n + k]);
      for (j = k + 1; j < n; j += 1) {
        abs = Math.abs(d1[j * n + k]);
        if (max < abs) {
          max = abs;
          p = j;
        }
      }

      ipiv[k] = p + 1;

      if (p !== k) {
        this.swap(k, p);
      }

      diag = d1[k * n + k];
      for (i = k + 1; i < n; i += 1) {
        d1[i * n + k] /= diag;
      }

      for (i = k + 1; i < n; i += 1) {
        for (j = k + 1; j < n - 1; j += 2) {
          d1[i * n + j] -= d1[i * n + k] * d1[k * n + j];
          d1[i * n + j + 1] -= d1[i * n + k] * d1[k * n + j + 1];
        }

        if (j === n - 1) {
          d1[i * n + j] -= d1[i * n + k] * d1[k * n + j];
        }
      }
    }
  }

  return [this, ipiv];
}
