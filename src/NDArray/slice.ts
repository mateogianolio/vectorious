import { TypedArray } from '../types';

import { NDArray } from './';

NDArray.slice = <T extends NDArray>(x: T, start?: number, step?: number, end?: number): T =>
  x.copy().slice(start, step, end);

/**
 * The basic slice syntax is i:j:k where i is the starting index, j is the stopping index,
 * and k is the step (k\neq0). This selects the m elements (in the corresponding dimension)
 * with index values i, i + k, ..., i + (m - 1) k where m = q + (r\neq0) and q and r are the
 * quotient and remainder obtained by dividing j - i by k: j - i = q k + r, so that
 * i + (m - 1) k < j.
 */
NDArray.prototype.slice = function<T extends NDArray>(
  this: T,
  begin: number = 0,
  end: number = this.shape[0],
  step: number = 1
): T {
  const { data: d1, shape: s1 } = this;

  let i: number = begin < 0 ? s1.length + begin : begin;
  const j: number = end < 0 ? s1.length + end : end;
  const k: number = step;
  const m: number = Math.ceil((j - i) / k);

  const s2: number[] = [m, ...s1.slice(1)];
  const l2: number = s2.reduce((sum: number, dim: number) => sum * dim, 1);
  const d2: TypedArray = new this.type(l2);

  for (; i < m * k; i += k) {
    d2[i / k] = d1[i];
  }

  this.length = l2;
  this.data = d2;
  this.reshape(s2);

  return this;
};
