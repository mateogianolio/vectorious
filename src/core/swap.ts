import { TypedArray } from '../types';

import { NDArray } from './';

NDArray.swap = <T extends NDArray>(x: T, i: number, j: number): T => x.copy().swap(i, j);

NDArray.prototype.swap = function<T extends NDArray>(this: T, i: number, j: number): T {
  this.check(i, 0);
  this.check(j, 0);

  const { data: d1 } = this;
  const [, c] = this.shape;
  const d2: TypedArray = d1.slice(i * c, (i + 1) * c);

  d1.copyWithin(i * c, j * c, (j + 1) * c);
  d1.set(d2, j * c);

  return this;
};
