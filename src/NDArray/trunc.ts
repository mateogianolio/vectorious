import { INDArray } from '../types';

/**
 * Returns the integer part of each element of current array, removing any fractional digits.
 */
export default function trunc<T extends INDArray<T>>(this: T): T {
  const { length: l1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    this.data[i] = Math.trunc(this.data[i]);
  }

  return this;
};
