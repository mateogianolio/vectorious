import { INDArray } from '../types';

/**
 * Fills the array with a scalar value, takes an optional `type` argument
 * which should be an instance of `TypedArray`.
 */
export function fill<T extends INDArray<T>>(this: T, value: number | ((index: number) => number) = 0): T {
  const { data, length } = this;

  let i: number;
  for (i = 0; i < length; i += 1) {
    data[i] = value instanceof Function ? value(i) : value;
  }

  return this;
};
