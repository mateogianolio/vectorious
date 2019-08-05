import { Matrix } from './';

/**
 * Finds the rank of the matrix using gaussian elimination.
 */
Matrix.rank = <T extends Matrix>(x: T): number => x.rank();

/**
 * Finds the rank of the matrix using gaussian elimination.
 */
Matrix.prototype.rank = function<T extends Matrix>(this: T): number {
  this.gauss();

  const [r, c] = this.shape;

  let rk: number = 0;
  let i: number;
  let j: number;

  for (i = 0; i < r; i += 1) {
    for (j = i; j < c; j += 1) {
      if (rk <= i && this.get(i, j) !== 0) {
        rk += 1;
        continue;
      }
    }
  }

  return rk;
};
