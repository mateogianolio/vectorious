import { NDArray } from './';

NDArray.copy = <T extends NDArray>(x: T): T => x.copy();

NDArray.prototype.copy = function<T extends NDArray>(this: T): T {
  const copy: T = Object.assign(Object.create(Object.getPrototypeOf(this)), this);

  copy.data = new this.type(this.data);
  copy.shape = this.shape;
  copy.length = this.length;
  copy.type = this.type;

  return copy;
};
