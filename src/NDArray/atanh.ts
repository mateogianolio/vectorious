import { INDArray } from '../types';

/**
 * Returns the hyperbolic arctangent of each element of current array.
 */
export function atanh<T extends INDArray<T>>(this: T): T {
  const { length: l1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    this.data[i] = Math.atanh(this.data[i]);
  }

  return this;
};
