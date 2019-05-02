import { INDArray, TypedArray } from '../types';

/**
 * Replaces current array with identity matrix of size `n`.
 */
export function eye<T extends INDArray>(this: T, n: number): T {
  const { data: d1 } = this;
  const l2: number = n * n;
  const d2: TypedArray = new this.type(l2);

  let i: number;
  let j: number;
  for (i = 0; i < n; i += 1) {
    for (j = 0; j < n; j += 1) {
      d2[i * n + j] = i === j ? 1 : 0;
    }
  }

  d1.set(d2);
  this.length = l2;
  this.shape = [n, n];

  return this;
}
