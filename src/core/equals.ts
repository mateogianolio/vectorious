import { NDArray } from './';

NDArray.equals = <T extends NDArray>(x: T | ArrayLike<any>, y: T | ArrayLike<any>): boolean =>
  NDArray.array<T>(x).equals(NDArray.array<T>(y));

NDArray.prototype.equals = function<T extends NDArray>(this: T, x: T): boolean {
  this.equilateral(x);
  this.equidimensional(x);

  const { data: d1, length: l1 } = this;
  const { data: d2 } = x;

  let i: number;

  for (i = 0; i < l1; i += 1) {
    if (d1[i] !== d2[i]) {
      return false;
    }
  }

  return true;
};
