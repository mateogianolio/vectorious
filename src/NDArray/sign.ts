import { NDArray } from './';

/**
 * Returns the sign of each element of `x`, indicating
 * whether it is positive, negative or zero.
 */
NDArray.sign = <T extends NDArray>(x: T): T => x.copy().sign();

/**
 * Returns the sign of each element of current array, indicating
 * whether it is positive, negative or zero.
 */
NDArray.prototype.sign = function<T extends NDArray>(this: T): T {
  const { length: l1, data: d1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    d1[i] = Math.sign(d1[i]);
  }

  return this;
};
