import { IMatrix } from '../types';

/**
 * Gets the determinant of any square matrix using LU factorization.
 */
export function determinant<T extends IMatrix>(this: T): number {
  this.square();

  const [r, c] = this.shape;
  const [lu, ipiv] = this.plu();

  let product: number = 1;
  let sign: number = 1;

  let i: number;
  for (i = 0; i < r; i += 1) {
    if (i !== ipiv[i]) {
      sign *= -1;
    }
  }

  for (i = 0; i < r; i += 1) {
    product *= lu.data[i * c + i];
  }

  return sign * product;
}
