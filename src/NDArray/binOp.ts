import { INDArray } from '../types';

import { equidimensional } from './equidimensional';
import { equilateral } from './equilateral';

/**
 * Perform binary operation `f` on `x` in the current array.
 */
export function binOp<T extends INDArray>(
  this: T,
  x: T,
  f: (
    a: number,
    b: number,
    index?: number
  ) => number
): T {
  equilateral.call(this, x);
  equidimensional.call(this, x);

  const { data: d1, length } = this;
  const { data: d2 } = x;

  let i: number;
  for (i = 0; i < length; i += 1) {
    d1[i] = f(d1[i], d2[i], i);
  }

  return this;
}
