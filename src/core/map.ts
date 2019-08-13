import { TypedArray } from '../types';

import { NDArray } from './';

NDArray.map = <T extends NDArray>(
  x: T | ArrayLike<any>,
  f: (value: number, i: number, src: TypedArray) => number
): T => NDArray.array<T>(x).map(f);

NDArray.prototype.map = function<T extends NDArray>(
  this: T,
  f: (value: number, i: number, src: TypedArray) => number
): T {
  const { data: d1, length: l1 } = this;
  const mapped: T = this.copy();
  const { data: d2 } = mapped;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    d2[i] = f.call(mapped, d1[i], i, d1);
  }

  return mapped;
};
