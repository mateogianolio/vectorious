import { NDArray } from './';

/**
 * Returns the absolute value of each element of `x`.
 */
NDArray.abs = <T extends NDArray>(x: T): T => x.copy().abs();

/**
 * Returns the absolute value of each element of current array.
 */
NDArray.prototype.abs = function<T extends NDArray>(this: T): T {
  const { length: l1, data: d1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    d1[i] = Math.abs(d1[i]);
  }

  return this;
};
