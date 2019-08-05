import { NDArray } from './';

NDArray.log2 = <T extends NDArray>(x: T): T => x.copy().log2();

NDArray.prototype.log2 = function<T extends NDArray>(this: T): T {
  const { length: l1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    this.set(i, Math.log2(this.get(i)));
  }

  return this;
};
