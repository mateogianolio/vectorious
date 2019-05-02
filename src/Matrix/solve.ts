import { INDArray } from '../types';

import { plu } from './plu';
import { swap } from './swap';

/**
 * Solves an LU factorized matrix with the supplied right hand side(s)
 */
export function solve<T extends INDArray>(this: T, x: T): T {
  const [PLU, ipiv] = plu.call(this);
  const { data: d1 } = PLU;
  const { data: d2 } = x;
  const [n, nrhs] = x.shape;

  let i: number;
  let j: number;
  let k: number;

  for (i = 0; i < ipiv.length; i += 1) {
    if (i !== ipiv[i]) {
      swap.call(x, i, ipiv[i]);
    }
  }

  for (k = 0; k < nrhs; k += 1) {
    for (i = 0; i < n; i += 1) {
      for (j = 0; j < i; j += 1) {
        d2[i * nrhs + k] -= d1[i * n + j] * d2[j * nrhs + k];
      }
    }

    for (i = n - 1; i >= 0; i -= 1) {
      for (j = i + 1; j < n; j += 1) {
        d2[i * nrhs + k] -= d1[i * n + j] * d2[j * nrhs + k];
      }

      d2[i * nrhs + k] /= d1[i * n + i];
    }
  }

  return x;
}
