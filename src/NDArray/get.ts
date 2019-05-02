import { INDArray } from '../types';

import { check } from './check';

/**
 * Gets the element at `i, j, ..., n` from current vector.
 */
export function get<T extends INDArray>(this: T, ...indices: number[]): number {
  check.call(this, ...indices);

  const { shape: s1 } = this;
  let index: number = indices[indices.length - 1];

  let i: number;
  for (i = 0; i < indices.length - 1; i += 1) {
    index += indices[i] * s1[i + 1];
  }

  return this.data[index];
}
