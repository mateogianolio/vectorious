import { NDArray } from './';

/**
 * Returns the cube root of each element of `x`.
 */
NDArray.cbrt = <T extends NDArray>(x: T): T => x.copy().cbrt();

/**
 * Returns the cube root of each element of current array.
 */
NDArray.prototype.cbrt = function<T extends NDArray>(this: T): T {
  const { length: l1, data: d1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    d1[i] = Math.cbrt(d1[i]);
  }

  return this;
};
