import { INDArray } from '../types';

/**
 * Asserts if indices `i, j, ..., n` are within the bounds of current array
 */
export function check<T extends INDArray>(this: T, ...indices: number[]): void {
  const { shape: s1 } = this;

  if (!s1.every((dim: number, i: number) => dim > indices[i] && Number.isFinite(indices[i]) && indices[i] >= 0)) {
    throw new Error('index out of bounds');
  }
}
