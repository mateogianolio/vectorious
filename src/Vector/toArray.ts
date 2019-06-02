import { IVector } from '../types';

/**
 * Converts current vector into a JavaScript array.
 */
export function toArray<T extends IVector>(this: T): number[] {
  return [].slice.call(this.data);
}
