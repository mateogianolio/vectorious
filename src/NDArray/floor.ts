import { NDArray } from './';

/**
 * Returns the largest integer less than or equal to a number of each element of `x`.
 */
NDArray.floor = <T extends NDArray>(x: T): T => x.copy().floor();

/**
 * Returns the largest integer less than or equal to a number of each element of current array.
 */
NDArray.prototype.floor = function<T extends NDArray>(this: T): T {
  const { length: l1, data: d1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    d1[i] = Math.floor(d1[i]);
  }

  return this;
};
