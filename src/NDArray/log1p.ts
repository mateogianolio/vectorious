import { INDArray } from '../types';

/**
 * Returns the natural logarithm (log_e, also ln) of 1 + x for each element of current array.
 */
export function log1p<T extends INDArray>(this: T): T {
  const { length: l1, data: d1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    d1[i] = Math.log1p(d1[i]);
  }

  return this;
}
