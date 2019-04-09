import { INDArray } from '../types';

/**
 * Returns the sine of each element of current array.
 */
export function sin<T extends INDArray<T>>(this: T): T {
  const { length: l1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    this.data[i] = Math.sin(this.data[i]);
  }

  return this;
};
