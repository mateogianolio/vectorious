import { NDArray } from './';

NDArray.sum = <T extends NDArray>(x: T): number => x.sum();

NDArray.prototype.sum = function<T extends NDArray>(this: T): number {
  const { data: d1, length: l1 } = this;

  let i: number;
  let sum: number = 0;
  for (i = 0; i < l1; i += 1) {
    sum += d1[i];
  }

  return sum;
};
