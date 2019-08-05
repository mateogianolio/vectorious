import { NDArray } from './';

NDArray.atanh = <T extends NDArray>(x: T): T => x.copy().atanh();

NDArray.prototype.atanh = function(): NDArray {
  const { length: l1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    this.set(i, Math.atanh(this.get(i)));
  }

  return this;
};
