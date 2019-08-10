import { NDArray } from './';

NDArray.get = <T extends NDArray>(x: T, ...indices: number[]): number => x.get(...indices);

NDArray.prototype.get = function<T extends NDArray>(this: T, ...indices: number[]): number {
  this.check(...indices);

  const { data: d1, shape: s1 } = this;
  const { length: ndim } = s1;
  let index: number = indices[ndim - 1];

  let i: number;
  let j: number;
  for (i = 0; i < ndim - 1; i += 1) {
    let p: number = 1;
    for (j = i + 1; j < ndim; j += 1) {
      p *= s1[j];
    }

    index += indices[i] * p;
  }

  return d1[index];
};
