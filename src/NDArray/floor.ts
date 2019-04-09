import { INDArray } from '../types';

/**
 * Returns the largest integer less than or equal to a number of each element of current array.
 */
export default function floor<T extends INDArray<T>>(this: T): T {
  const { length: l1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    this.data[i] = Math.floor(this.data[i]);
  }

  return this;
};
