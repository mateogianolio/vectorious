import { IMatrix } from '../types';

/**
 * Gets the trace of the matrix (the sum of all diagonal elements).
 */
export function trace<T extends IMatrix>(this: T): number {
  const { data: d1 } = this;
  const c: number = this.shape[1];

  let result: number = 0;

  let j: number;
  for (j = 0; j < c; j += 1) {
    result += d1[j * c + j];
  }

  return result;
}
