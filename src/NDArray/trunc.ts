import { INDArray } from '../types';

/**
 * Returns the integer part of each element of current array,
 * removing any fractional digits.
 */
export function trunc<T extends INDArray>(this: T): T {
  const { length: l1, data: d1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    d1[i] = Math.trunc(d1[i]);
  }

  return this;
}
