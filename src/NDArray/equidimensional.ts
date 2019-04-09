import { INDArray } from '../types';

/**
 * Asserts if current array and `x` have the same shape
 */
export function equidimensional<T extends INDArray<T>>(this: T, x: T): void {
  const { shape: s1 } = this;
  const { shape: s2 } = x;

  if (!s1.every((dim: number, i: number) => dim === s2[i])) {
    throw new Error(`shapes ${s1} and ${s2} do not match`);
  }
};
