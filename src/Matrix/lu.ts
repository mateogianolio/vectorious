import { IMatrix } from '../types';

/**
 * Performs full LU decomposition on a matrix.
 */
export function lu<T extends IMatrix>(this: T): [T, T, Int32Array] {
  const [r, c] = this.shape;
  const [PLU, ipiv] = this.copy().plu();
  const L: T = PLU.copy() as T;
  const U: T = PLU.copy() as T;

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
}
