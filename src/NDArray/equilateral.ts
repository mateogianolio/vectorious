import { INDArray } from '../types';

/**
 * Asserts if current array and `x` have the same length
 */
export default function equilateral<T extends INDArray<T>>(this: T, x: T): void {
  const { length: l1 } = this;
  const { length: l2 } = x;

  if (l1 !== l2) {
    throw new Error(`lengths ${l1} and ${l2} do not match`);
  }
};
