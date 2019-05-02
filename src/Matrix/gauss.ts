import { INDArray } from '../types';

import { swap } from './swap';

/**
 * Performs Gaussian elimination on current matrix.
 */
export function gauss<T extends INDArray>(this: T): T {
  const { data: d1 } = this;
  const [r, c] = this.shape;

  let lead: number = 0;
  let leadValue: number;
  let pivot: number;

  let i: number;
  let j: number;
  let k: number;
  for (i = 0; i < r; i += 1) {
    if (c <= lead) {
      throw new Error('matrix is singular');
    }

    j = i;
    while (d1[j * c + lead] === 0) {
      j += 1;
      if (r === j) {
        j = i;
        lead += 1;

        if (c === lead) {
          throw new Error('matrix is singular');
        }
      }
    }

    if (i !== j) {
      swap.call(this, i, j);
    }

    pivot = d1[i * c + lead];
    if (pivot !== 0) {
      for (k = 0; k < c; k += 1) {
        d1[i * c + k] /= pivot;
      }
    }

    for (j = 0; j < r; j += 1) {
      leadValue = d1[j * c + lead];
      if (j !== i) {
        for (k = 0; k < c; k += 1) {
          d1[j * c + k] -= d1[i * c + k] * leadValue;
        }
      }
    }

    lead += 1;
  }

  for (i = 0; i < r; i += 1) {
    pivot = 0;
    for (j = 0; j < c; j += 1) {
      if (pivot === 0) {
        pivot = d1[i * c + j];
      }
    }

    if (pivot === 0) {
      for (k = 0; k < c; k += 1) {
        d1[i * c + k] /= pivot;
      }
    }
  }

  return this;
}
