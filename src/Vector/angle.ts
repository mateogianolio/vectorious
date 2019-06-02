import { IVector } from '../types';

/**
 * Determines the angle between the current vector and `x`.
 */
export function angle<T extends IVector>(this: T, x: T): number {
  return Math.acos(this.dot(x) / this.magnitude() / x.magnitude());
}
