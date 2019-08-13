import { TypedArray } from '../types';
import { get_type } from '../util';

import { NDArray } from './';

NDArray.combine = <T extends NDArray>(x: T | ArrayLike<any>, y: T | ArrayLike<any>): T =>
  NDArray.array<T>(x).combine(NDArray.array<T>(y));

NDArray.prototype.combine = function<T extends NDArray>(this: T, x: T): T {
  if (this.shape.length !== 1 && x.shape.length !== 1) {
    throw new Error('combine operation not permitted for multidimensional arrays');
  }

  const { length: l1, data: d1 } = this;
  const { length: l2, data: d2 } = x;

  if (l2 === 0) {
    return this;
  }

  if (l1 === 0) {
    this.data = new (get_type(x.dtype))(d2);
    this.length = l2;
    this.dtype = x.dtype;

    return this;
  }

  const l3: number = l1 + l2;
  const d3: TypedArray = new (get_type(this.dtype))(l3);

  d3.set(d1);
  d3.set(d2, l1);

  this.data = d3;
  this.length = l3;
  this.shape = [l3];

  return this;
};
