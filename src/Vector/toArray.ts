import { INDArray } from '../types';

/**
 * Converts current vector into a JavaScript array.
 */
export function toArray<T extends INDArray>(this: T): number[] {
  return [].slice.call(this.data);
}
