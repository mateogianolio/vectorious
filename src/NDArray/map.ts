import { TypedArray } from '../types';

import { NDArray } from './';

/**
 * Maps a function `f` to all elements of `x`.
 */
NDArray.map = <T extends NDArray>(x: T, f: (value: number, i: number, src: TypedArray) => number): T => x.map(f);

/**
 * Maps a function `f` to all elements of current vector.
 */
NDArray.prototype.map = function<T extends NDArray>(
  this: T,
  f: (value: number, i: number, src: TypedArray) => number
): T {
  const { length: l1 } = this;
  const mapped: T = NDArray.copy(this);
  const { data: d1 } = mapped;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    d1[i] = f.call(mapped, d1[i], i, d1);
  }

  return mapped;
};
