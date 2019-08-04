import { NDArray } from './';

/**
 * Gets the minimum value (smallest) element of `x`.
 */
NDArray.min = <T extends NDArray>(x: T): number => x.min();

/**
 * Gets the minimum value (smallest) element of current array.
 */
NDArray.prototype.min = function<T extends NDArray>(this: T): number {
  const { data, length } = this;

  let result: number = Number.POSITIVE_INFINITY;

  let i: number;
  for (i = 0; i < length; i += 1) {
    result = result < data[i] ? result : data[i];
  }

  return result;
};
