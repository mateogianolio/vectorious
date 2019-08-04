import { NDArray } from './';

/**
 * Returns the cosine of each element of `x`.
 */
NDArray.cos = <T extends NDArray>(x: T): T => x.copy().cos();

/**
 * Returns the cosine of each element of current array.
 */
NDArray.prototype.cos = function<T extends NDArray>(this: T): T {
  const { length: l1, data: d1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    d1[i] = Math.cos(d1[i]);
  }

  return this;
};
