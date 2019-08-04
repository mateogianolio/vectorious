import { NDArray } from './';

/**
 * Subtracts `y` from `x`.
 */
NDArray.subtract = <T extends NDArray>(x: T, y: T): T => x.copy().subtract(y);

/**
 * Subtracts `x` from the current array.
 */
NDArray.prototype.subtract = function<T extends NDArray>(this: T, x: T): T {
  return this.add(x, -1);
};
