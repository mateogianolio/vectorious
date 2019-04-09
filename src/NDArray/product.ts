import { INDArray } from '../types';

/**
 * Hadamard product with `x`
 */
export function product<T extends INDArray<T>>(this: T, x: T): T {
  this.equilateral(x);
  this.equidimensional(x);

  const { data: d1, length: l1 } = this;
  const { data: d2 } = x;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    d1[i] *= d2[i];
  }

  return this;
};
