import { NDArray } from './';
import { array } from './array';

/**
 * @static
 * @memberof vectorious
 * @function det
 * @description Gets the determinant of `x`.
 * @param {NDArray} x
 * @returns {Number}
 * @example
 * import { det } from 'vectorious/core/det';
 *
 * det([[0, 1], [2, 3]]); // => -2
 */
export const det = (x: NDArray | ArrayLike<any>): number => array(x).det();

export default function (this: NDArray): number {
  this.square();

  const [n] = this.shape;
  const [LU, ipiv] = this.copy().lu_factor();
  const { data: d1 } = LU;

  let product: number = 1;
  let sign: number = 1;

  let i: number;
  for (i = 0; i < n; i += 1) {
    product *= d1[i * n + i];
    if (i !== ipiv[i] - 1) {
      sign *= -1;
    }
  }

  return sign * product;
}
