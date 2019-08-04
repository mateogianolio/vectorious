import { Vector } from './';

/**
 * Projects the `y` onto `x` using the projection formula `(y * (x * y / y * y))`.
 */
Vector.project = (x: Vector, y: Vector): Vector => x.copy().project(y);

/**
 * Projects the current vector onto `x` using the projection formula `(y * (x * y / y * y))`.
 */
Vector.prototype.project = function<T extends Vector>(this: T, x: T): T {
  return x.scale(this.dot(x) / x.dot(x));
};
