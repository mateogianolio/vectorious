import { Vector } from './';

Vector.angle = (x: Vector, y: Vector): number => x.angle(y);

Vector.prototype.angle = function(this: Vector, x: Vector): number {
  return Math.acos(this.dot(x) / this.norm() / x.norm());
};
