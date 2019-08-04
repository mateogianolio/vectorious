import { Vector } from './';

/**
 * Converts `x` into a JavaScript array.
 */
Vector.toArray = (x: Vector): number[] => x.toArray();

/**
 * Converts current vector into a JavaScript array.
 */
Vector.prototype.toArray = function<T extends Vector>(this: T): number[] {
  return [].slice.call(this.data);
};
