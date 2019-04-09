import { INDArray } from '../types';

/**
 * Subtracts `x` from the current array.
 */
export function subtract<T extends INDArray<T>>(this: T, x: T): T {
  return this.add(x, -1);
};
