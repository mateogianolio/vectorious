import { INDArray } from '../types';

import { equidimensional } from './equidimensional';
import { equilateral } from './equilateral';

/**
 * Hadamard product with `x`
 */
export function product<T extends INDArray>(this: T, x: T): T {
  equilateral.call(this, x);
  equidimensional.call(this, x);

  const { data: d1, length: l1 } = this;
  const { data: d2 } = x;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    d1[i] *= d2[i];
  }

  return this;
}
