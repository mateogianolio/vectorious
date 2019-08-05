import { TypedArray } from '../types';

import { Vector } from './';

Vector.push = (x: Vector, value: number): Vector => x.copy().push(value);

Vector.prototype.push = function<T extends Vector>(this: T, value: number): T {
  const { data: d1, length: l1 } = this;
  const l2: number = l1 + 1;
  const d2: TypedArray = new this.type(l2);

  d2.set(d1);
  d2[l1] = value;

  this.data = d2;
  this.length = l2;
  this.shape = [l2];

  return this;
};
