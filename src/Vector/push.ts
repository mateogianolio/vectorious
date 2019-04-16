import { INDArray, TypedArray } from '../types';

/**
 * Pushes a new `value` into current vector.
 */
export function push<T extends INDArray>(this: T, value: number): T {
  const { length: l1, data: d1 } = this;
  const l2: number = l1 + 1;
  const d2: TypedArray = new this.type(l2);

  d2.set(d1);
  d2[l1] = value;

  this.data = d2;
  this.length = l2;
  this.shape = [l2];

  return this;
}
