import { INDArray } from '../types';

/**
 * Returns the sign of each element of current array, indicating
 * whether it is positive, negative or zero.
 */
export function sign<T extends INDArray>(this: T): T {
  const { length: l1, data: d1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    d1[i] = Math.sign(d1[i]);
  }

  return this;
}
