import { NDArray } from './';

/**
 * Returns the hyperbolic cosine of each element of `x`.
 */
NDArray.cosh = <T extends NDArray>(x: T): T => x.copy().cosh();

/**
 * Returns the hyperbolic cosine of each element of current array.
 */
NDArray.prototype.cosh = function<T extends NDArray>(this: T): T {
  const { length: l1, data: d1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    d1[i] = Math.cosh(d1[i]);
  }

  return this;
};
