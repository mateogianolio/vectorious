import { NDArray } from './';

NDArray.normalize = <T extends NDArray>(x: T): T => x.copy().normalize();

NDArray.prototype.normalize = function<T extends NDArray>(this: T): NDArray {
  return this.scale(1 / this.norm());
};
