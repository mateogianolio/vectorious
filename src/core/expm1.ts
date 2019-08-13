import { NDArray } from './';

NDArray.expm1 = <T extends NDArray>(x: T | ArrayLike<any>): T => NDArray.array<T>(x).expm1();

NDArray.prototype.expm1 = function<T extends NDArray>(this: T): T {
  const { data: d1, length: l1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    d1[i] = Math.expm1(d1[i]);
  }

  return this;
};
