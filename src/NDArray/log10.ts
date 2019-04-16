import { INDArray } from '../types';

/**
 * Returns the base 10 logarithm of each element of current array.
 */
export function log10<T extends INDArray>(this: T): T {
  const { length: l1, data: d1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    d1[i] = Math.log10(d1[i]);
  }

  return this;
}
