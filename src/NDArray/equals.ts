import { INDArray } from '../types';

import { equidimensional } from './equidimensional';
import { equilateral } from './equilateral';

/**
 * Checks if current array and `x` are equal.
 */
export function equals<T extends INDArray>(this: T, x: T): boolean {
  equilateral.call(this, x);
  equidimensional.call(this, x);

  const { data: d1, length: l1 } = this;
  const { data: d2 } = x;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    if (d1[i] !== d2[i]) {
      return false;
    }
  }

  return true;
}
