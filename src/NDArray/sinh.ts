import { INDArray } from '../types';

/**
 * Returns the hyperbolic sine of each element of current array.
 */
export default function sinh<T extends INDArray<T>>(this: T): T {
  const { length: l1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    this.data[i] = Math.sinh(this.data[i]);
  }

  return this;
};
