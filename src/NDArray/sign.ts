import { INDArray } from '../types';

/**
 * Returns the sign of each element of current array, indicating whether it is positive, negative or zero.
 */
export default function sign<T extends INDArray<T>>(this: T): T {
  const { length: l1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    this.data[i] = Math.sign(this.data[i]);
  }

  return this;
};
