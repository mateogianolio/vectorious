import { NDArray } from './';

/**
 * Returns the hyperbolic arctangent of each element of `x`.
 */
NDArray.atanh = <T extends NDArray>(x: T): T => x.copy().atanh();

/**
 * Returns the hyperbolic arctangent of each element of current array.
 */
NDArray.prototype.atanh = function(): NDArray {
  const { length: l1, data: d1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    d1[i] = Math.atanh(d1[i]);
  }

  return this;
};
