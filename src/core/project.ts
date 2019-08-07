import { NDArray } from './';

NDArray.project = <T extends NDArray>(x: T, y: T): T => x.copy().project(y);

NDArray.prototype.project = function<T extends NDArray>(this: T, x: T): T {
  return x.scale(this.dot(x) / x.dot(x));
};
