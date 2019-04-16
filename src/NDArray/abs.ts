import { INDArray } from '../types';

/**
 * Returns the absolute value of each element of current array.
 */
export function abs<T extends INDArray>(this: T): T {
  const { length: l1, data: d1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    d1[i] = Math.abs(d1[i]);
  }

  return this;
}
