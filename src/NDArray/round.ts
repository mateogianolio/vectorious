import { INDArray } from '../types';

/**
 * Returns the value of each element of current array rounded to the nearest integer.
 */
export function round<T extends INDArray>(this: T): T {
  const { length: l1, data: d1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    d1[i] = Math.round(d1[i]);
  }

  return this;
}
