import { NDArray } from './';

/**
 * Returns the hyperbolic tangent of each element of `x`.
 */
NDArray.tanh = <T extends NDArray>(x: T): T => x.copy().tanh();

/**
 * Returns the hyperbolic tangent of each element of current array.
 */
NDArray.prototype.tanh = function<T extends NDArray>(this: T): T {
  const { length: l1, data: d1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    d1[i] = Math.tanh(d1[i]);
  }

  return this;
};
