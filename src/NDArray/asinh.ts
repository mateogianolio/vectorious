import { NDArray } from './';

/**
 * Returns the hyperbolic arcsine of each element of `x`.
 */
NDArray.asinh = <T extends NDArray>(x: T): T => x.copy().asinh();

/**
 * Returns the hyperbolic arcsine of each element of current array.
 */
NDArray.prototype.asinh = function<T extends NDArray>(this: T): T {
  const { length: l1, data: d1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    d1[i] = Math.asinh(d1[i]);
  }

  return this;
};
