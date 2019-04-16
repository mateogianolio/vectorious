import { dot } from '../NDArray/dot';
import { scale } from '../NDArray/scale';
import { INDArray } from '../types';

/**
 * Projects the current vector onto `x` using the projection formula `(y * (x * y / y * y))`.
 */
export function project<T extends INDArray>(this: T, x: T): T {
  return scale.call(x, dot.call(this, x) / dot.call(x, x)) as T;
}
