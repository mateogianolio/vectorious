import { Matrix } from './';

/**
 * Performs full LU decomposition on a matrix.
 */
Matrix.lu = <T extends Matrix>(x: T): [T, T, Int32Array] => x.lu();

/**
 * Performs full LU decomposition on a matrix.
 */
Matrix.prototype.lu = function<T extends Matrix>(this: T): [T, T, Int32Array] {
  const [r, c] = this.shape;
  const [PLU, ipiv] = this.copy().plu();
  const L: T = PLU.copy();
  const U: T = PLU.copy();

  let i: number;
  let j: number;
  for (i = 0; i < r; i += 1) {
    for (j = i; j < c; j += 1) {
      L.data[i * c + j] = i === j ? 1 : 0;
    }
  }

  for (i = 0; i < r; i += 1) {
    for (j = 0; j < i && j < c; j += 1) {
      U.data[i * c + j] = 0;
    }
  }

  return [L, U, ipiv];
};
