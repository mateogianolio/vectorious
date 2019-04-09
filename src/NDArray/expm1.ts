import { INDArray } from '../types';

/**
 * Returns subtracting 1 from exp(x) of each element of current array.
 */
export default function expm1<T extends INDArray<T>>(this: T): T {
  const { length: l1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    this.data[i] = Math.expm1(this.data[i]);
  }

  return this;
};
