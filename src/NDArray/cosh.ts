import { INDArray } from '../types';

/**
 * Returns the hyperbolic cosine of each element of current array.
 */
export function cosh<T extends INDArray<T>>(this: T): T {
  const { length: l1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    this.data[i] = Math.cosh(this.data[i]);
  }

  return this;
};
