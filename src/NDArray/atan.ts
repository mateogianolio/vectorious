import { INDArray } from '../types';

/**
 * Returns the arctangent of each element of current array.
 */
export function atan<T extends INDArray>(this: T): T {
  const { length: l1, data: d1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    d1[i] = Math.atan(d1[i]);
  }

  return this;
}
