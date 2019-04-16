import { magnitude } from '../NDArray/magnitude';
import { scale } from '../NDArray/scale';
import { INDArray } from '../types';

/**
 * Normalizes current vector.
 */
export function normalize<T extends INDArray>(this: T): T {
  return scale.call(this, 1 / magnitude.call(this)) as T;
}
