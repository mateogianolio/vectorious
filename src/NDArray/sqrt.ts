import { INDArray } from '../types';

/**
 * Returns the positive square root of each element of current array.
 */
export default function sqrt<T extends INDArray<T>>(this: T): T {
  const { length: l1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    this.data[i] = Math.sqrt(this.data[i]);
  }

  return this;
};
