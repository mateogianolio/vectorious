import { NDArray } from './';

NDArray.project = <T extends NDArray>(x: T | ArrayLike<any>, y: T | ArrayLike<any>): T =>
  NDArray.array<T>(x).project(NDArray.array<T>(y));

NDArray.prototype.project = function<T extends NDArray>(this: T, x: T): T {
  return x.scale(this.dot(x) / x.dot(x));
};
