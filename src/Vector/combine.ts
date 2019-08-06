import { TypedArray } from '../types';
import { get_type } from '../util';

import { Vector } from './';

Vector.combine = (x: Vector, y: Vector): Vector => x.copy().combine(y);

Vector.prototype.combine = function<T extends Vector>(this: T, x: T): T {
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
