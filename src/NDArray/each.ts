import { TypedArray } from '../types';

import { NDArray } from './';

/**
 * Functional version of for-looping the vector, is equivalent
 * to `Array.prototype.forEach`.
 */
NDArray.each = <T extends NDArray>(x: T, f: (value: number, i: number, src: TypedArray) => void): T => x.each(f);

/**
 * Functional version of for-looping the vector, is equivalent
 * to `Array.prototype.forEach`.
 */
NDArray.prototype.each = function<T extends NDArray>(
  this: T,
  f: (value: number, i: number, src: TypedArray) => void
): T {
  const { data: d1, length: l1 } = this;
  let i: number;
  for (i = 0; i < l1; i += 1) {
    f.call(this, d1[i], i, d1);
  }

  return this;
};
