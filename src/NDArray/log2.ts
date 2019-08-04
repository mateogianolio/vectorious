import { NDArray } from './';

/**
 * Returns the base 2 logarithm of each element of `x`.
 */
NDArray.log2 = <T extends NDArray>(x: T): T => x.copy().log2();

/**
 * Returns the base 2 logarithm of each element of current array.
 */
NDArray.prototype.log2 = function<T extends NDArray>(this: T): T {
  const { length: l1, data: d1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    d1[i] = Math.log2(d1[i]);
  }

  return this;
};
