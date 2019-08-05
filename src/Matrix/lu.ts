import { Matrix } from './';

/**
 * Performs full LU decomposition on a matrix.
 */
Matrix.lu = <T extends Matrix>(x: T): [T, T, Int32Array] => x.lu();

Matrix.prototype.lu = function<T extends Matrix>(this: T): [T, T, Int32Array] {
  const [r, c] = this.shape;
  const [LU, ipiv] = this.copy().lu_factor();
  const L: T = LU.copy();
  const U: T = LU.copy();

  let i: number;
  let j: number;
  for (i = 0; i < r; i += 1) {
    for (j = i; j < c; j += 1) {
      L.set(i, j, i === j ? 1 : 0);
    }
  }

  for (i = 0; i < r; i += 1) {
    for (j = 0; j < i && j < c; j += 1) {
      U.set(i, j, 0);
    }
  }

  return [L, U, ipiv];
};
