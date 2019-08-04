import { Vector } from './';

/**
 * Computes the cross product of the current vector and the vector 'x'
 * This operation can be only calculate for vectors with three components.
 * Otherwise it's throws an exception.
 * The method returns a new (result) vector.
 */
Vector.cross = (x: Vector, y: Vector): Vector => x.copy().cross(y);

/**
 * Computes the cross product of the current vector and the vector 'x'
 * This operation can be only calculate for vectors with three components.
 * Otherwise it's throws an exception.
 * The method returns a new (result) vector.
 */
Vector.prototype.cross = function<T extends Vector>(this: T, x: T): T {
  const { length: l1 } = this;
  const { length: l2 } = x;

  if (l1 !== 3 || l2 !== 3) {
    throw new Error('cross(...) : vectors must have three components.');
  }

  const { data: d1 } = this;
  const { data: d2 } = x;

  const c1: number = d1[1] * d2[2] - d1[2] * d2[1];
  const c2: number = d1[2] * d2[0] - d1[0] * d2[2];
  const c3: number = d1[0] * d2[1] - d1[1] * d2[0];

  d1[0] = c1;
  d1[1] = c2;
  d1[2] = c3;

  return this;
};
