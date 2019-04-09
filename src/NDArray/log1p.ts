import { INDArray } from '../types';

/**
 * Returns the natural logarithm (log_e, also ln) of 1 + x for each element of current array.
 */
export default function log1p<T extends INDArray<T>>(this: T): T {
  const { length: l1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    this.data[i] = Math.log1p(this.data[i]);
  }

  return this;
};
