import { NDArray } from './';

/**
 * Returns each element of current array to the exponent power, that is, element^exponent.
 */
NDArray.pow = <T extends NDArray>(x: T, exponent: number): T => x.copy().pow(exponent);

/**
 * Returns each element of current array to the exponent power, that is, element^exponent.
 */
NDArray.prototype.pow = function<T extends NDArray>(this: T, exponent: number): T {
  const { length: l1, data: d1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    d1[i] = Math.pow(d1[i], exponent);
  }

  return this;
};
