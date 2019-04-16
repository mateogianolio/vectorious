import { INDArray } from '../types';

import { check } from './check';

/**
 * Gets the element at `i` from current vector.
 */
export function get<T extends INDArray>(this: T, i: number): number {
  check.call(this, i);

  return this.data[i];
}
