import { INDArray } from '../types';

/**
 * Returns the hyperbolic sine of each element of current array.
 */
export function sinh<T extends INDArray>(this: T): T {
  const { length: l1, data: d1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    d1[i] = Math.sinh(d1[i]);
  }

  return this;
}
