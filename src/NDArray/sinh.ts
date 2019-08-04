import { NDArray } from './';

/**
 * Returns the hyperbolic sine of each element of current array.
 */
NDArray.sinh = <T extends NDArray>(x: T): T => x.copy().sinh();

/**
 * Returns the hyperbolic sine of each element of current array.
 */
NDArray.prototype.sinh = function<T extends NDArray>(this: T): T {
  const { length: l1, data: d1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    d1[i] = Math.sinh(d1[i]);
  }

  return this;
};
