import { TypedArray } from '../types';

import { Vector } from './';

/**
 * Combines the vector `x` with `y`
 */
Vector.combine = (x: Vector, y: Vector): Vector => x.copy().combine(y);

/**
 * Combines the current vector with `x`
 */
Vector.prototype.combine = function<T extends Vector>(this: T, x: T): T {
  const { length: l1, data: d1 } = this;
  const { length: l2, data: d2 } = x;

  if (l2 === 0) {
    return this;
  }

  if (l1 === 0) {
    this.data = new x.type(d2);
    this.length = l2;
    this.type = x.type;

    return this;
  }

  const l3: number = l1 + l2;
  const d3: TypedArray = new this.type(l3);

  d3.set(d1);
  d3.set(d2, l1);

  this.data = d3;
  this.length = l3;
  this.shape = [l3];

  return this;
};
