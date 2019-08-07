import { NDArray } from './';

NDArray.trunc = <T extends NDArray>(x: T): T => x.copy().trunc();

NDArray.prototype.trunc = function<T extends NDArray>(this: T): T {
  const { length: l1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    this.set(i, Math.trunc(this.get(i)));
  }

  return this;
};
