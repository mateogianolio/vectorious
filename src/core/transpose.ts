import { NDArray } from './';

NDArray.transpose = <T extends NDArray>(x: T | ArrayLike<any>): T =>
  NDArray.array<T>(x).transpose();

NDArray.prototype.transpose = function<T extends NDArray>(this: T): T {
  this.strides.reverse();
  this.shape.reverse();

  return this;
};
