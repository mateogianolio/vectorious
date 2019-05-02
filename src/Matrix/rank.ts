import { INDArray } from '../types';

import { gauss } from './gauss';

/**
 * Finds the rank of the matrix using gaussian elimination.
 */
export function rank<T extends INDArray>(this: T): number {
  gauss.call(this);

  const { data: d1 } = this;
  const [r, c] = this.shape;

  let rk: number = 0;
  let i: number;
  let j: number;
  for (i = 0; i < r; i += 1) {
    for (j = i; j < c; j += 1) {
      if (d1[i * c + j] !== 0) {
        rk += 1;
        continue;
      }
    }
  }

  return rk;
}
