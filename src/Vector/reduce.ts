import { INDArray, TypedArray } from '../types';

/**
 * Equivalent to `TypedArray.prototype.reduce`.
 */
export function reduce<T extends INDArray>(
  this: T,
  f: (acc: number, value: number, i: number, src: TypedArray) => number,
  initialValue?: number
): number {
  const { length: l1 } = this;
  if (l1 === 0 && initialValue === undefined) {
    throw new Error('Reduce of empty matrix with no initial value.');
  }

  const { data: d1 } = this;
  let i: number;
  let value: number;

  if (initialValue === undefined) {
    value = d1[0];
    i = 1;
  } else {
    value = initialValue;
    i = 0;
  }

  for (; i < l1; i += 1) {
    value = f.call(this, value, d1[i], i, d1);
  }

  return value;
}
