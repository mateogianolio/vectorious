import { TypedArray } from '../types';

import { NDArray } from './';
import { NDIter } from '../iterator';

NDArray.map = <T extends NDArray>(
  x: T | ArrayLike<any>,
  f: (value: number, i: number, src: TypedArray) => number
): T => NDArray.array<T>(x).map(f);

NDArray.prototype.map = function<T extends NDArray>(
  this: T,
  f: (value: number, i: number, src: TypedArray) => number
): T {
  const { data: d1 } = this;
  const iter = new NDIter(this);
  const map = f.bind(this);

  do {
    d1[iter.pos] = map(d1[iter.pos], iter.pos, d1);

    iter.next();
  } while (!iter.done());

  return this;
};
