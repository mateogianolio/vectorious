import { NDArray } from './';

/**
 * Returns the nearest single precision float representation of each element of `x`.
 */
NDArray.fround = <T extends NDArray>(x: T): T => x.copy().fround();

/**
 * Returns the nearest single precision float representation of each element of current array.
 */
NDArray.prototype.fround = function<T extends NDArray>(this: T): T {
  const { length: l1, data: d1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    d1[i] = Math.fround(d1[i]);
  }

  return this;
};
