import { INDArray } from '../types';

/**
 * Returns the base 2 logarithm of each element of current array.
 */
export function log2<T extends INDArray<T>>(this: T): T {
  const { length: l1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    this.data[i] = Math.log2(this.data[i]);
  }

  return this;
};
