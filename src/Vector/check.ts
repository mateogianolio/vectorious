import { INDArray } from '../types';

/**
 * Check if `i` is within the bounds for current vector.
 */
export function check<T extends INDArray>(this: T, i: number): void {
  if (!Number.isFinite(i) || i < 0 || i > this.length - 1) {
    throw new Error('index out of bounds');
  }
}
