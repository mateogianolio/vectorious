import { NDArray } from './';

NDArray.product = <T extends NDArray>(x: T | ArrayLike<any>, y: T | ArrayLike<any>): T =>
  NDArray.array<T>(x).product(NDArray.array<T>(y));

NDArray.prototype.product = function<T extends NDArray>(this: T, x: T): T {
  this.equilateral(x);
  this.equidimensional(x);

  const { data: d1, length: l1 } = this;
  const { data: d2 } = x;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    d1[i] *= d2[i];
  }

  return this;
};
