import { NDArray } from './';

NDArray.subtract = <T extends NDArray>(x: T, y: T): T => x.copy().subtract(y);

NDArray.prototype.subtract = function<T extends NDArray>(this: T, x: T): T {
  return this.add(x, -1);
};
