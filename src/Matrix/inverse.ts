import { IMatrix, TypedArray } from '../types';

/**
 * Determines the inverse of current matrix using
 * Gaussian elimination.
 */
export function inverse<T extends IMatrix>(this: T): T {
  this.square();

  const [r, c] = this.shape;
  const { data: d1, length: l1 } = this;

  const identity: T = this.copy().eye(r) as T;
  const echelon: T = this.copy().augment(identity).gauss() as T;

  const d2: TypedArray = new this.type(l1);

  let i: number;
  let j: number;
  for (i = 0; i < r; i += 1) {
    for (j = 0; j < c + r; j += 1) {
      if (j < c) {
      } else {
        d2[i * c + j - r] = d1[i * c + j];
      }
    }
  }

  d1.set(d2);
  this.length = l1;
  this.shape = [r, c];

  return this;
}
