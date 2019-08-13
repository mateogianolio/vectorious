import { TypedArray } from '../types';

import { NDArray } from './';

NDArray.forEach = <T extends NDArray>(
  x: T,
  f: (value: number, i: number, src: TypedArray) => void
): void => {
  x.forEach(f);
};

NDArray.prototype.forEach = function<T extends NDArray>(
  this: T,
  f: (value: number, i: number, src: TypedArray) => void
): void {
  const { data: d1, length: l1 } = this;
  let i: number;
  for (i = 0; i < l1; i += 1) {
    f.call(this, d1[i], i, d1);
  }
};
