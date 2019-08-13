import { TypedArray } from '../types';
import { get_type } from '../util';

import { NDArray } from './';

NDArray.push = <T extends NDArray>(x: T | ArrayLike<any>, value: number): T =>
  NDArray.array<T>(x).push(value);

NDArray.prototype.push = function<T extends NDArray>(this: T, value: number): T {
  if (this.shape.length !== 1) {
    throw new Error('push operation not permitted for multidimensional arrays');
  }

  const { data: d1, length: l1 } = this;
  const l2: number = l1 + 1;
  const d2: TypedArray = new (get_type(this.dtype))(l2);

  d2.set(d1);
  d2[l1] = value;

  this.data = d2;
  this.length = l2;
  this.shape = [l2];

  return this;
};
