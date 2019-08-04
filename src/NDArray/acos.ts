import { NDArray } from './';

/**
 * Returns the arccosine of each element of `x`.
 */
NDArray.acos = <T extends NDArray>(x: T): T => x.copy().acos();

/**
 * Returns the arccosine of each element of current array.
 */
NDArray.prototype.acos = function<T extends NDArray>(this: T): T {
  const { length: l1, data: d1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    d1[i] = Math.acos(d1[i]);
  }

  return this;
};
