import { NDArray } from './';

NDArray.log1p = <T extends NDArray>(x: T): T => x.copy().log1p();

NDArray.prototype.log1p = function<T extends NDArray>(this: T): T {
  const { length: l1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    this.set(i, Math.log1p(this.get(i)));
  }

  return this;
};
