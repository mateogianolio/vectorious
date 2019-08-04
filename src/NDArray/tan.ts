import { NDArray } from './';

/**
 * Returns the tangent of each element of `x`.
 */
NDArray.tan = <T extends NDArray>(x: T): T => x.copy().tan();

/**
 * Returns the tangent of each element of current array.
 */
NDArray.prototype.tan = function<T extends NDArray>(this: T): T {
  const { length: l1, data: d1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    d1[i] = Math.tan(d1[i]);
  }

  return this;
};
