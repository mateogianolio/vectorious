import { Vector } from './';

Vector.normalize = (x: Vector): Vector => x.copy().normalize();

Vector.prototype.normalize = function<T extends Vector>(this: T): Vector {
  return this.scale(1 / this.norm());
};
