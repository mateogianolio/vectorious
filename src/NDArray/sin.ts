import { NDArray } from './';

/**
 * Returns the sine of each element of current array.
 */
NDArray.sin = <T extends NDArray>(x: T): T => x.copy().sin();

/**
 * Returns the sine of each element of current array.
 */
NDArray.prototype.sin = function<T extends NDArray>(this: T): T {
  const { length: l1, data: d1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    d1[i] = Math.sin(d1[i]);
  }

  return this;
};
