import { NDArray } from './';

NDArray.det = <T extends NDArray>(x: T): number => x.det();

NDArray.prototype.det = function<T extends NDArray>(this: T): number {
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
