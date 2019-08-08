import { NDArray } from './';

NDArray.acosh = <T extends NDArray>(x: T): T => x.copy().acosh();

NDArray.prototype.acosh = function<T extends NDArray>(this: T): T {
  const { data: d1, length: l1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    d1[i] = Math.acosh(d1[i]);
  }

  return this;
};
