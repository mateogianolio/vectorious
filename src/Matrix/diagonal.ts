import { IMatrix, TypedArray } from '../types';

/**
 * Gets the diagonal of current matrix.
 */
export function diagonal<T extends IMatrix>(this: T): T {
  const { data: d1 } = this;
  const [r, c] = this.shape;

  const l2: number = Math.min(r, c);
  const d2: TypedArray = new this.type(l2);

  let i: number;
  for (i = 0; i < r && i < c; i += 1) {
    d2[i] = d1[i * c + i];
  }

  this.data = d2;
  this.length = l2;
  this.shape = [l2];

  return this;
}
