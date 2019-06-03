import { IMatrix } from '../types';

/**
 * Determines the inverse of current matrix using
 * Gaussian elimination.
 */
export function inverse<T extends IMatrix>(this: T): T {
  this.square();

  const [r, c] = this.shape;
  const { length: l1 } = this;

  const identity: T = this.copy().eye(r) as T;
  const rref: T = this.copy().augment(identity).gauss() as T;
  const left: T = this.copy().scale(0) as T;
  const right: T = this.copy().scale(0) as T;

  const { data: d1 } = left;
  const { data: d2 } = right;
  const { data: d3 } = rref;
  const n: number = c + r;

  let i: number;
  let j: number;

  for (i = 0; i < r; i += 1) {
    for (j = 0; j < n; j += 1) {
      if (j < c) {
        d1[i * c + j] = d3[i * n + j];
      } else {
        d2[i * c + (j - r)] = d3[i * n + j];
      }
    }
  }

  if (!left.equals(identity)) {
    throw new Error('matrix is not invertible');
  }

  this.data = d2;
  this.length = l1;
  this.shape = [r, c];

  return this;
}
