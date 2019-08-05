import { TypedArray } from '../types';

import { NDArray } from './';

NDArray.each = <T extends NDArray>(x: T, f: (value: number, i: number, src: TypedArray) => void): T => x.each(f);

NDArray.prototype.each = function<T extends NDArray>(
  this: T,
  f: (value: number, i: number, src: TypedArray) => void
): T {
  const { data: d1, length: l1 } = this;
  let i: number;
  for (i = 0; i < l1; i += 1) {
    f.call(this, this.get(i), i, d1);
  }

  return this;
};
