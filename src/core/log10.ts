import { NDArray } from './';

NDArray.log10 = <T extends NDArray>(x: T): T => x.copy().log10();

NDArray.prototype.log10 = function<T extends NDArray>(this: T): T {
  const { length: l1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    this.set(i, Math.log10(this.get(i)));
  }

  return this;
};
