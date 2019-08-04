import { NDArray } from './';

/**
 * Returns the natural logarithm (log_e, also ln) of each element of `x`.
 */
NDArray.log = <T extends NDArray>(x: T): T => x.copy().log();

/**
 * Returns the natural logarithm (log_e, also ln) of each element of current array.
 */
NDArray.prototype.log = function<T extends NDArray>(this: T): T {
  const { length: l1, data: d1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    d1[i] = Math.log(d1[i]);
  }

  return this;
};
