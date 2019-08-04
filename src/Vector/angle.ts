import { Vector } from './';

/**
 * Determines the angle between the `x` and `y`
 */
Vector.angle = (x: Vector, y: Vector): number => x.angle(y);

/**
 * Determines the angle between the current vector and `x`
 */
Vector.prototype.angle = function(this: Vector, x: Vector): number {
  return Math.acos(this.dot(x) / this.magnitude() / x.magnitude());
};
