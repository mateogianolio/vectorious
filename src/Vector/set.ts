import { INDArray } from '../types';

import { check } from './check';

/**
 * Sets the element at `i` to `value`.
 */
export function set<T extends INDArray>(this: T, i: number, value: number): T {
  check.call(this, i);
  this.data[i] = value;

  return this;
}
