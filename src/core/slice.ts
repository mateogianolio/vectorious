import { TypedArray } from '../types';
import { get_type } from '../util';

import { NDArray } from './';

NDArray.slice = <T extends NDArray>(
  x: T | ArrayLike<any>,
  start?: number,
  step?: number,
  end?: number
): T =>
  NDArray.array<T>(x).slice(start, step, end);

NDArray.prototype.slice = function<T extends NDArray>(
  this: T,
  begin: number = 0,
  end: number = this.shape[0],
  step: number = 1
): T {
  const { data: d1, shape: s1 } = this;
  const { length: ndim } = s1;

  if (begin < 0 || end < 0) {
    return this.slice(begin < 0 ? ndim + begin : begin, end < 0 ? ndim + end : end);
  }

  if (step === 0) {
    throw new Error('step argument cannot be 0');
  }

  const s2: number[] = [Math.ceil((end - begin) / step), ...s1.slice(1)];
  const l2: number = s2.reduce((sum: number, dim: number) => sum * dim, 1);
  const d2: TypedArray = new (get_type(this.dtype))(l2);

  let i: number;
  for (i = 0; i < l2; i += 1) {
    d2[i] = d1[begin + i * step];
  }

  this.length = l2;
  this.data = d2;
  this.reshape(...s2);

  return this;
};
