import { IMatrix, TypedArray } from '../types';

/**
 * Swaps two rows `i` and `j` in a matrix.
 */
export function swap<T extends IMatrix>(this: T, i: number, j: number): T {
  this.check(i, 0);
  this.check(j, 0);

  const { data: d1 } = this;
  const c: number = this.shape[1];
  const d2: TypedArray = d1.slice(i * c, (i + 1) * c);

  d1.copyWithin(i * c, j * c, (j + 1) * c);
  d1.set(d2, j * c);

  return this;
}
