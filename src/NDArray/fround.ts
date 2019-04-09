import { INDArray } from '../types';

/**
 * Returns the nearest single precision float representation of each element of current array.
 */
export default function fround<T extends INDArray<T>>(this: T): T {
  const { length: l1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    this.data[i] = Math.fround(this.data[i]);
  }

  return this;
};
