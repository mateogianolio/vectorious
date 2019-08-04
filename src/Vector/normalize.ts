import { Vector } from './';

/**
 * Normalizes `x`.
 */
Vector.normalize = (x: Vector): Vector => x.copy().normalize();

/**
 * Normalizes current vector.
 */
Vector.prototype.normalize = function<T extends Vector>(this: T): Vector {
  return this.scale(1 / this.magnitude());
};
