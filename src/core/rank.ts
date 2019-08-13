import { NDArray } from './';

/**
 * Finds the rank of the matrix using gaussian elimination.
 */
NDArray.rank = <T extends NDArray>(x: T | ArrayLike<any>): number => NDArray.array<T>(x).rank();

/**
 * Finds the rank of the matrix using gaussian elimination.
 */
NDArray.prototype.rank = function<T extends NDArray>(this: T): number {
  this.gauss();

  const [r, c] = this.shape;
  const { data: d1 } = this;

  let rk: number = 0;
  let i: number;
  let j: number;

  for (i = 0; i < r; i += 1) {
    for (j = i; j < c; j += 1) {
      if (rk <= i && d1[i * c + j] !== 0) {
        rk += 1;
        continue;
      }
    }
  }

  return rk;
};
