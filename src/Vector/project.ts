import { Vector } from './';

Vector.project = (x: Vector, y: Vector): Vector => x.copy().project(y);

Vector.prototype.project = function<T extends Vector>(this: T, x: T): T {
  return x.scale(this.dot(x) / x.dot(x));
};
