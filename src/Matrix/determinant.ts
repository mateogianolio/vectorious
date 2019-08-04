import { Matrix } from './';

/**
 * Gets the determinant of `x` using LU factorization.
 */
Matrix.determinant = <T extends Matrix>(x: T): number => x.determinant();

/**
 * Gets the determinant of current matrix using LU factorization.
 */
Matrix.prototype.determinant = function<T extends Matrix>(this: T): number {
  this.square();

  const [r, c] = this.shape;
  const [lu, ipiv] = this.copy().plu();
  const { data: d1 } = lu;

  let product: number = 1;
  let sign: number = 1;

  let i: number;
  for (i = 0; i < r; i += 1) {
    if (i !== ipiv[i]) {
      sign *= -1;
    }
  }

  for (i = 0; i < r; i += 1) {
    product *= d1[i * c + i];
  }

  return sign * product;
};
