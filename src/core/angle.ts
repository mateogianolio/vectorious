import { NDArray } from './';

NDArray.angle = <T extends NDArray>(x: T, y: T): number => x.angle(y);

NDArray.prototype.angle = function<T extends NDArray>(this: T, x: T): number {
  return Math.acos(this.dot(x) / this.norm() / x.norm());
};
