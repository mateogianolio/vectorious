import { INDArray } from '../types';

/**
 * Returns the nearest single precision float representation of each element of current array.
 */
export function fround<T extends INDArray>(this: T): T {
  const { length: l1, data: d1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    d1[i] = Math.fround(d1[i]);
  }

  return this;
}
