import { NDArray } from './';

NDArray.cosh = <T extends NDArray>(x: T): T => x.copy().cosh();

NDArray.prototype.cosh = function<T extends NDArray>(this: T): T {
  const { data: d1, length: l1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    d1[i] = Math.cosh(d1[i]);
  }

  return this;
};
