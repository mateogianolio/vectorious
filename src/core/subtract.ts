import { NDArray } from './';

NDArray.subtract = <T extends NDArray>(x: T | ArrayLike<any>, y: T | ArrayLike<any>): T =>
  NDArray.array<T>(x).subtract(NDArray.array<T>(y));

NDArray.prototype.subtract = function<T extends NDArray>(this: T, x: T): T {
  return this.add(x, -1);
};
