import { INDArray } from '../types';

/**
 * Returns each element of current array to the exponent power, that is, element^exponent.
 */
export function pow<T extends INDArray>(this: T, exponent: number): T {
  const { length: l1, data: d1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    d1[i] = Math.pow(d1[i], exponent);
  }

  return this;
}
