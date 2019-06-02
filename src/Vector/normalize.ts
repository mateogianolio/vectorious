import { IVector } from '../types';

/**
 * Normalizes current vector.
 */
export function normalize<T extends IVector>(this: T): T {
  return this.scale(1 / this.magnitude()) as T;
}
