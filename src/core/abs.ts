import { NDArray } from './';

NDArray.abs = <T extends NDArray>(x: T): T => x.copy().abs();

NDArray.prototype.abs = function<T extends NDArray>(this: T): T {
  const { data: d1, length: l1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    d1[i] = Math.abs(d1[i]);
  }

  return this;
};
