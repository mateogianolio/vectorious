import { INDArray } from '../types';

/**
 * Gets the minimum value (smallest) element of current array.
 */
export default function min<T extends INDArray<T>>(this: T): number {
  const { data, length } = this;

  let result: number = Number.POSITIVE_INFINITY;

  let i: number;
  for (i = 0; i < length; i += 1) {
    result = result < data[i] ? result : data[i];
  }

  return result;
};
