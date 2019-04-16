import { INDArray } from '../types';

import { equidimensional } from './equidimensional';
import { equilateral } from './equilateral';

let nblas: any;
try {
  nblas = require('nblas');
} catch (err) {}

/**
 * Adds `x` multiplied by `alpha` to the current array.
 */
export function add<T extends INDArray>(this: T, x: T, alpha: number = 1): T {
  equilateral.call(this, x);
  equidimensional.call(this, x);

  const { data: d1, length: l1 } = this;
  const { data: d2 } = x;

  try {
    nblas.axpy(d2, d1, alpha);
  } catch (err) {
    let i: number;
    for (i = 0; i < l1; i += 1) {
      d1[i] += alpha * d2[i];
    }
  }

  return this;
}
