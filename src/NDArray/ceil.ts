import { NDArray } from './';

/**
 * Returns smallest integer greater than or equal to of each element of `x`.
 */
NDArray.ceil = <T extends NDArray>(x: T): T => x.copy().ceil();

/**
 * Returns smallest integer greater than or equal to of each element of current array.
 */
NDArray.prototype.ceil = function<T extends NDArray>(this: T): T {
  const { length: l1, data: d1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    d1[i] = Math.ceil(d1[i]);
  }

  return this;
};
