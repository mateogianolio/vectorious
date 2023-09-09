import { NDArray } from './';
import { NDIter } from '../iterators';
import { array } from './array';

/**
 * @static
 * @memberof vectorious
 * @function lu
 * @description
 * Performs full LU decomposition on `x`.
 * Accelerated with LAPACK `?getrf`.
 * @param {NDArray} x
 * @returns {Array<NDArray, Int32Array>}
 * @example
 * import { lu } from 'vectorious/core/lu';
 *
 * lu([[1, 3, 5], [2, 4, 7], [1, 1, 0]]); // => [array([[1, 0, 0], [0.5, 1, 0], [0.5, -1, 1]]), array([[2, 4, 7], [0, 1, 1.5], [0, 0, -2]]), Int32Array([2, 2, 3])]
 */
export const lu = (x: NDArray | ArrayLike<any>): [NDArray, NDArray, Int32Array] => array(x).lu();

export default function (this: NDArray): [NDArray, NDArray, Int32Array] {
  const [LU, ipiv] = this.copy().lu_factor();
  const L = LU.copy();
  const U = LU.copy();
  const { data: d1 } = L;
  const { data: d2 } = U;

  const iter = new NDIter(LU);

  let [ci, cj] = iter.coords;
  for (const i of iter) {
    if (cj < ci) {
      d2[i] = 0;
    } else {
      d1[i] = ci === cj ? 1 : 0;
    }

    [ci, cj] = iter.coords;
  }

  return [L, U, ipiv];
}
