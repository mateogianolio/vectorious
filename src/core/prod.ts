import { NDArray } from './';

NDArray.prod = <T extends NDArray>(x: T): number => x.prod();

NDArray.prototype.prod = function<T extends NDArray>(this: T): number {
  const { data: d1, length: l1 } = this;

  let i: number;
  let prod: number = 1;
  for (i = 0; i < l1; i += 1) {
    prod *= d1[i];
  }

  return prod;
};
