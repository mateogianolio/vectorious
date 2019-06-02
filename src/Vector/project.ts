import { IVector } from '../types';

/**
 * Projects the current vector onto `x` using the projection formula `(y * (x * y / y * y))`.
 */
export function project<T extends IVector>(this: T, x: T): T {
  return x.scale(this.dot(x) / x.dot(x)) as T;
}
