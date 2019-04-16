import { INDArray } from '../types';

/**
 * Returns the positive square root of each element of current array.
 */
export function sqrt<T extends INDArray>(this: T): T {
  const { length: l1, data: d1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    d1[i] = Math.sqrt(d1[i]);
  }

  return this;
}
