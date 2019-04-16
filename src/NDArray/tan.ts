import { INDArray } from '../types';

/**
 * Returns the tangent of each element of current array.
 */
export function tan<T extends INDArray>(this: T): T {
  const { length: l1, data: d1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    d1[i] = Math.tan(d1[i]);
  }

  return this;
}
