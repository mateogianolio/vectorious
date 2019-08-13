import { NDArray } from './';

NDArray.tanh = <T extends NDArray>(x: T | ArrayLike<any>): T => NDArray.array<T>(x).tanh();

NDArray.prototype.tanh = function<T extends NDArray>(this: T): T {
  const { data: d1, length: l1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    d1[i] = Math.tanh(d1[i]);
  }

  return this;
};
