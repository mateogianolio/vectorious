import { NDArray } from './';

NDArray.tan = <T extends NDArray>(x: T): T => x.copy().tan();

NDArray.prototype.tan = function<T extends NDArray>(this: T): T {
  const { data: d1, length: l1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    d1[i] = Math.tan(d1[i]);
  }

  return this;
};
