import { IMatrix } from '../types';

/**
 * Converts current matrix into a two-dimensional array
 */
export function toArray<T extends IMatrix>(this: T): number[][] {
  const { data: d1 } = this;
  const [r, c] = this.shape;
  const result: number[][] = [];

  let i: number;
  for (i = 0; i < r; i += 1) {
    result.push(Array.prototype.slice.call(d1.subarray(i * c, (i + 1) * c)));
  }

  return result;
}
