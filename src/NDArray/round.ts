import { NDArray } from './';

/**
 * Returns the value of each element of `x` rounded to the nearest integer.
 */
NDArray.round = <T extends NDArray>(x: T): T => x.copy().round();

/**
 * Returns the value of each element of current array rounded to the nearest integer.
 */
NDArray.prototype.round = function<T extends NDArray>(this: T): T {
  const { length: l1, data: d1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    d1[i] = Math.round(d1[i]);
  }

  return this;
};
