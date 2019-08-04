import { TypedArray } from '../types';

import { Vector } from './';

/**
 * Pushes a new `value` into `x`.
 */
Vector.push = (x: Vector, value: number): Vector => x.copy().push(value);

/**
 * Pushes a new `value` into current vector.
 */
Vector.prototype.push = function<T extends Vector>(this: T, value: number): T {
  const { length: l1, data: d1 } = this;
  const l2: number = l1 + 1;
  const d2: TypedArray = new this.type(l2);

  d2.set(d1);
  d2[l1] = value;

  this.data = d2;
  this.length = l2;
  this.shape = [l2];

  return this;
};
