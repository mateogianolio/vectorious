import { INDArray } from '../types';

/**
 * Returns the value of each element of current array rounded to the nearest integer.
 */
export default function round<T extends INDArray<T>>(this: T): T {
  const { length: l1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    this.data[i] = Math.round(this.data[i]);
  }

  return this;
};
