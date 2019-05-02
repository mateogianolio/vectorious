import { copy } from '../NDArray/copy';
import { INDArray, TypedArray } from '../types';

/**
 * Maps a function `f` to all elements of current vector.
 */
export function map<T extends INDArray>(
  this: T,
  f: (value: number, i: number, src: TypedArray) => number
): T {
  const { length: l1 } = this;
  const mapped: T = copy.call(this) as T;
  const data: TypedArray = mapped.data;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    data[i] = f.call(mapped, data[i], i, data);
  }

  return mapped;
}
