import { NDArray } from './';

/**
 * Returns the hyperbolic arccosine of each element of `x`.
 */
NDArray.acosh = <T extends NDArray>(x: T): T => x.copy().acosh();

/**
 * Returns the hyperbolic arccosine of each element of current array.
 */
NDArray.prototype.acosh = function<T extends NDArray>(this: T): T {
  const { length: l1, data: d1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    d1[i] = Math.acosh(d1[i]);
  }

  return this;
};
