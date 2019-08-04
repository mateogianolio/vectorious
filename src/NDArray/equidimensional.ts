import { NDArray } from './';

/**
 * Asserts if `x` and `y` have the same shape
 */
NDArray.equidimensional = <T extends NDArray>(x: T, y: T): void => {
  x.equidimensional(y);
};

/**
 * Asserts if current array and `x` have the same shape
 */
NDArray.prototype.equidimensional = function<T extends NDArray>(this: T, x: T): void {
  const { shape: s1 } = this;
  const { shape: s2 } = x;

  if (!s1.every((dim: number, i: number) => dim === s2[i])) {
    throw new Error(`shapes ${s1} and ${s2} do not match`);
  }
};
