import { NDArray } from './';

/**
 * Asserts if `x` and `y` have the same length
 */
NDArray.equilateral = <T extends NDArray>(x: T, y: T): void => {
  x.equilateral(y);
};

/**
 * Asserts if current array and `x` have the same length
 */
NDArray.prototype.equilateral = function<T extends NDArray>(this: T, x: T): void {
  const { length: l1 } = this;
  const { length: l2 } = x;

  if (l1 !== l2) {
    throw new Error(`lengths ${l1} and ${l2} do not match`);
  }
};
