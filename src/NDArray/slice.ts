import { TypedArray } from '../types';
import { get_type } from '../util';

import { NDArray } from './';

NDArray.slice = <T extends NDArray>(x: T, start?: number, step?: number, end?: number): T =>
  x.copy().slice(start, step, end);

NDArray.prototype.slice = function<T extends NDArray>(
  this: T,
  begin: number = 0,
  end: number = this.shape[0],
  step: number = 1
): T {
  const { data: d1, shape: s1 } = this;

  const i: number = begin < 0 ? s1.length + begin : begin;
  const j: number = end < 0 ? s1.length + end : end;
  const k: number = step;

  const s2: number[] = [Math.ceil((j - i) / k), ...s1.slice(1)];
  const l2: number = s2.reduce((sum: number, dim: number) => sum * dim, 1);
  const d2: TypedArray = new (get_type(this.dtype))(l2);

  let l: number;
  for (l = 0; l < l2; l += 1) {
    d2[l] = d1[i + l * k];
  }

  this.length = l2;
  this.data = d2;
  this.reshape(s2);

  return this;
};
