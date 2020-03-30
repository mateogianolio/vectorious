import { TypedArray } from '../types';

import { NDArray } from './';
import { NDIter } from '../iterator';

NDArray.reduce = <T extends NDArray>(
  x: T,
  f: (acc: number, value: number, i: number, src: TypedArray) => number,
  initialValue?: number
): number => NDArray.array<T>(x).reduce(f, initialValue);

NDArray.prototype.reduce = function<T extends NDArray>(
  this: T,
  f: (acc: number, value: number, i: number, src: TypedArray) => number,
  initialValue?: number
): number {
  const { data: d1, length: l1 } = this;
  if (l1 === 0 && typeof initialValue === 'undefined') {
    throw new Error('Reduce of empty array with no initial value.');
  }

  const iter = new NDIter(this);
  const reduce = f.bind(this);

  let value: number;

  if (typeof initialValue === 'undefined') {
    value = d1[0];
    iter.next();
  } else {
    value = initialValue;
  }

  do {
    value = reduce(value, d1[iter.pos], iter.pos, d1);

    iter.next();
  } while (!iter.done());

  return value;
};
