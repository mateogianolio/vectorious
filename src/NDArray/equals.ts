import { NDArray } from './';

/**
 * Checks if `x` and `y` are equal.
 */
NDArray.equals = <T extends NDArray>(x: T, y: T): boolean => x.equals(y);

/**
 * Checks if current array and `x` are equal.
 */
NDArray.prototype.equals = function<T extends NDArray>(this: T, x: T): boolean {
  this.equilateral(x);
  this.equidimensional(x);

  const { data: d1, length: l1 } = this;
  const { data: d2 } = x;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    if (d1[i] !== d2[i]) {
      return false;
    }
  }

  return true;
};
