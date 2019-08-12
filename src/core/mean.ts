import { NDArray } from './';

NDArray.mean = <T extends NDArray>(x: T): number => x.mean();

NDArray.prototype.mean = function<T extends NDArray>(this: T): number {
  const { data: d1, length: l1 } = this;

  let i: number;
  let mean: number = 0;
  for (i = 0; i < l1; i += 1) {
    mean += d1[i];
  }

  return mean / l1;
};
