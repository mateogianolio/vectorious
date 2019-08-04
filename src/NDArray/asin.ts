import { NDArray } from './';

/**
 * Returns the arcsine of each element of `x`.
 */
NDArray.asin = <T extends NDArray>(x: T): T => x.copy().asin();

/**
 * Returns the arcsine of each element of current array.
 */
NDArray.prototype.asin = function<T extends NDArray>(this: T): T {
  const { length: l1, data: d1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    d1[i] = Math.asin(d1[i]);
  }

  return this;
};
