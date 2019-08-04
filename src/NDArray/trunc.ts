import { NDArray } from './';

/**
 * Returns the integer part of each element of `x`,
 * removing any fractional digits.
 */
NDArray.trunc = <T extends NDArray>(x: T): T => x.copy().trunc();

/**
 * Returns the integer part of each element of current array,
 * removing any fractional digits.
 */
NDArray.prototype.trunc = function<T extends NDArray>(this: T): T {
  const { length: l1, data: d1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    d1[i] = Math.trunc(d1[i]);
  }

  return this;
};
