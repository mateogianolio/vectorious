import { Vector } from './';

Vector.toArray = (x: Vector): number[] => x.toArray();

Vector.prototype.toArray = function<T extends Vector>(this: T): number[] {
  return [].slice.call(this.data);
};
