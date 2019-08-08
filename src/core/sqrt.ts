import { NDArray } from './';

NDArray.sqrt = <T extends NDArray>(x: T): T => x.copy().sqrt();

NDArray.prototype.sqrt = function<T extends NDArray>(this: T): T {
  const { data: d1, length: l1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    d1[i] = Math.sqrt(d1[i]);
  }

  return this;
};
