import { INDArray } from '../types';

import { plu } from './plu';
import { square } from './square';

/**
 * Gets the determinant of any square matrix using LU factorization.
 */
export function determinant<T extends INDArray>(this: T): number {
  square.call(this);

  const [r, c] = this.shape;
  const [lu, ipiv] = plu.call(this);

  let product: number = 1;
  let sign: number = 1;

  let i: number;
  for (i = 0; i < r; i += 1) {
    if (i !== ipiv[i]) {
      sign *= -1;
    }
  }

  for (i = 0; i < r; i += 1) {
    product *= lu.data[i * c + i];
  }

  return sign * product;
}
