import { INDArray } from '../types';

/**
 * Returns the base 10 logarithm of each element of current array.
 */
export function log10<T extends INDArray<T>>(this: T): T {
  const { length: l1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    this.data[i] = Math.log10(this.data[i]);
  }

  return this;
};
