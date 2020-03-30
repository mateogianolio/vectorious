import { NDArray } from './';

/**
 * Performs full LU decomposition on a matrix.
 */
NDArray.lu = <T extends NDArray>(x: T | ArrayLike<any>): [T, T, Int32Array] =>
  NDArray.array<T>(x).lu();

NDArray.prototype.lu = function<T extends NDArray>(this: T): [T, T, Int32Array] {
  const [r, c] = this.shape;
  const [LU, ipiv] = this.copy().lu_factor();
  const L: T = LU.copy();
  const U: T = LU.copy();
  const { data: d1 } = L;
  const { data: d2 } = U;

  let i: number;
  let j: number;
  for (i = 0; i < r; i += 1) {
    for (j = i; j < c; j += 1) {
      d1[i * c + j] = i === j ? 1 : 0;
    }
  }

  for (i = 0; i < r; i += 1) {
    for (j = 0; j < i && j < c; j += 1) {
      d2[i * c + j] = 0;
    }
  }

  return [L, U, ipiv];
};
