import { INDArray } from '../types';

import { add } from './add';

/**
 * Subtracts `x` from the current array.
 */
export function subtract<T extends INDArray>(this: T, x: T): T {
  return add.call(this, x, -1) as T;
}
