import { TypedArray } from '../types';

import { NDArray } from './';

NDArray.reduce = <T extends NDArray>(
  x: T,
  f: (acc: number, value: number, i: number, src: TypedArray) => number,
  initialValue?: number
): number => x.reduce(f, initialValue);

NDArray.prototype.reduce = function<T extends NDArray>(
  this: T,
  f: (acc: number, value: number, i: number, src: TypedArray) => number,
  initialValue?: number
): number {
  const { length: l1 } = this;
  if (l1 === 0 && typeof initialValue === 'undefined') {
    throw new Error('Reduce of empty matrix with no initial value.');
  }

  const { data: d1 } = this;
  let i: number;
  let value: number;

  if (typeof initialValue === 'undefined') {
    value = d1[0];
    i = 1;
  } else {
    value = initialValue;
    i = 0;
  }

  for (; i < l1; i += 1) {
    value = f.call(this, value, d1[i], i, d1);
  }

  return value;
};
