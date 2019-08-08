import { NDArray } from './';

NDArray.atanh = <T extends NDArray>(x: T): T => x.copy().atanh();

NDArray.prototype.atanh = function(): NDArray {
  const { data: d1, length: l1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    d1[i] = Math.atanh(d1[i]);
  }

  return this;
};
