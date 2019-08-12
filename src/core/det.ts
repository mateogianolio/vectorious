import { NDArray } from './';

NDArray.det = <T extends NDArray>(x: T): number => x.det();

NDArray.prototype.det = function<T extends NDArray>(this: T): number {
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
};
