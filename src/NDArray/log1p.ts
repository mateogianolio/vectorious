import { NDArray } from './';

/**
 * Returns the natural logarithm (log_e, also ln) of 1 + x for each element of `x`.
 */
NDArray.log1p = <T extends NDArray>(x: T): T => x.copy().log1p();

/**
 * Returns the natural logarithm (log_e, also ln) of 1 + x for each element of current array.
 */
NDArray.prototype.log1p = function<T extends NDArray>(this: T): T {
  const { length: l1, data: d1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    d1[i] = Math.log1p(d1[i]);
  }

  return this;
};
