import { NDArray } from './';

NDArray.atan = <T extends NDArray>(x: T): T => x.copy().atan();

NDArray.prototype.atan = function<T extends NDArray>(this: T): T {
  const { data: d1, length: l1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    d1[i] = Math.atan(d1[i]);
  }

  return this;
};
