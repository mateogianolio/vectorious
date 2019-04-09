import { INDArray } from '../types';

/**
 * Returns the natural logarithm (log_e, also ln) of each element of current array.
 */
export default function log<T extends INDArray<T>>(this: T): T {
  const { length: l1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    this.data[i] = Math.log(this.data[i]);
  }

  return this;
};
