import { Vector } from './';

Vector.cross = (x: Vector, y: Vector): Vector => x.copy().cross(y);

Vector.prototype.cross = function<T extends Vector>(this: T, x: T): T {
  const { length: l1 } = this;
  const { length: l2 } = x;

  if (l1 !== 3 || l2 !== 3) {
    throw new Error('vectors must have three components');
  }

  const c1: number = this.y * x.z - this.z * x.y;
  const c2: number = this.z * x.x - this.x * x.z;
  const c3: number = this.x * x.y - this.y * x.x;

  this.x = c1;
  this.y = c2;
  this.z = c3;

  return this;
};
