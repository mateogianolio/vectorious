import { NDArray } from './';

/**
 * Fills `x` with a scalar value
 */
NDArray.fill = <T extends NDArray>(x: T, value: number | ((index: number) => number) = 0): T => x.copy().fill(value);

/**
 * Fills the current array with a scalar value
 */
NDArray.prototype.fill = function<T extends NDArray>(this: T, value: number | ((index: number) => number) = 0): T {
  const { data, length } = this;

  let i: number;
  for (i = 0; i < length; i += 1) {
    data[i] = value instanceof Function ? value(i) : value;
  }

  return this;
};
