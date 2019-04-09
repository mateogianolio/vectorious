import { INDArray } from '../types';

/**
 * Returns the smallest integer greater than or equal to each element of current array.
 */
export default function ceil<T extends INDArray<T>>(this: T): T {
  const { length: l1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    this.data[i] = Math.ceil(this.data[i]);
  }

  return this;
};
