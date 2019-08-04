import { NDArray } from './';

/**
 * Returns subtracting 1 from exp(x) of each element of `x`.
 */
NDArray.expm1 = <T extends NDArray>(x: T): T => x.copy().expm1();

/**
 * Returns subtracting 1 from exp(x) of each element of current array.
 */
NDArray.prototype.expm1 = function<T extends NDArray>(this: T): T {
  const { length: l1, data: d1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    d1[i] = Math.expm1(d1[i]);
  }

  return this;
};
