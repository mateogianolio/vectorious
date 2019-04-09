import { INDArray } from '../types';

/**
 * Returns each element of current array to the exponent power, that is, element^exponent.
 */
export function pow<T extends INDArray<T>>(this: T, exponent: number): T {
  const { length: l1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    this.data[i] = Math.pow(this.data[i], exponent);
  }

  return this;
};
