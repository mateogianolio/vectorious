import { NDArray } from './';

/**
 * Returns e^x of each element of `x`, where x is the argument,
 * and e is Euler's constant (2.718…), the base of the natural logarithm.
 */
NDArray.exp = <T extends NDArray>(x: T): T => x.copy().exp();

/**
 * Returns e^x of each element of current array, where x is the argument,
 * and e is Euler's constant (2.718…), the base of the natural logarithm.
 */
NDArray.prototype.exp = function<T extends NDArray>(this: T): T {
  const { length: l1, data: d1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    d1[i] = Math.exp(d1[i]);
  }

  return this;
};
