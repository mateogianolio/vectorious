import { dot } from '../NDArray/dot';
import { magnitude } from '../NDArray/magnitude';
import { INDArray } from '../types';

/**
 * Determines the angle between the current vector and `x`.
 */
export function angle<T extends INDArray>(this: T, x: T): number {
  return Math.acos(dot.call(this, x) / magnitude.call(this) / magnitude.call(x));
}
