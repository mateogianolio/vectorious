import { NDArray } from './';

NDArray.min = <T extends NDArray>(x: T | ArrayLike<any>): number => NDArray.array<T>(x).min();

NDArray.prototype.min = function<T extends NDArray>(this: T): number {
  const { data, length } = this;

  let result: number = Number.POSITIVE_INFINITY;

  let i: number;
  for (i = 0; i < length; i += 1) {
    result = result < data[i] ? result : data[i];
  }

  return result;
};
