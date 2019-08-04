import { NDArray } from './';

/**
 * Returns the arctangent of each element of `x`.
 */
NDArray.atan = <T extends NDArray>(x: T): T => x.copy().atan();

/**
 * Returns the arctangent of each element of current array.
 */
NDArray.prototype.atan = function<T extends NDArray>(this: T): T {
  const { length: l1, data: d1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    d1[i] = Math.atan(d1[i]);
  }

  return this;
};
