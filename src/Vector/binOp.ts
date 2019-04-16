import { INDArray } from '../types';

/**
 * Perform binary operation `f` on `x` in the current vector.
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
  const { length: l1} = this;
  const { length: l2} = x;

  if (l1 !== l2) {
    throw new Error('sizes do not match!');
  }

  const { data: d1 } = this;
  const { data: d2 } = x;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    d1[i] = f(d1[i], d2[i], i);
  }

  return this;
}
