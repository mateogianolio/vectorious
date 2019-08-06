import { get_type } from '../util';

import { NDArray } from './';

NDArray.copy = <T extends NDArray>(x: T): T => x.copy();

NDArray.prototype.copy = function<T extends NDArray>(this: T): T {
  const copy: T = Object.assign(Object.create(Object.getPrototypeOf(this)), this);

  copy.data = new (get_type(this.dtype))(this.data);
  copy.shape = this.shape;
  copy.length = this.length;
  copy.dtype = this.dtype;

  return copy;
};
