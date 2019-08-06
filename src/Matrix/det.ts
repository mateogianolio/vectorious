import { Matrix } from './';

Matrix.det = <T extends Matrix>(x: T): number => x.det();

Matrix.prototype.det = function<T extends Matrix>(this: T): number {
  this.square();

  const [r] = this.shape;
  const [LU, ipiv] = this.copy().lu_factor();

  let product: number = 1;
  let sign: number = 1;

  let i: number;
  for (i = 0; i < r; i += 1) {
    if (i !== ipiv[i] - 1) {
      sign *= -1;
    }
  }

  for (i = 0; i < r; i += 1) {
    product *= LU.get(i, i);
  }

  return sign * product;
};
