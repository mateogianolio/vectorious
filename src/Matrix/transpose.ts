import { IMatrix, TypedArray } from '../types';

/**
 * Transposes a matrix (mirror across the diagonal).
 */
export function transpose<T extends IMatrix>(this: T): T {
  const { data: d1 } = this;
  const [r, c] = this.shape;
  const d2: TypedArray = new this.type(c * r);

  let i: number;
  let j: number;
  for (i = 0; i < r; i += 1) {
    for (j = 0; j < c; j += 1) {
      d2[j * r + i] = d1[i * c + j];
    }
  }

  this.data = d2;
  this.shape = [c, r];

  return this;
}
