import { NDArray } from './';

NDArray.trunc = <T extends NDArray>(x: T): T => x.copy().trunc();

NDArray.prototype.trunc = function<T extends NDArray>(this: T): T {
  const { data: d1, length: l1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    d1[i] = Math.trunc(d1[i]);
  }

  return this;
};
