import { NDArray } from './';

NDArray.fround = <T extends NDArray>(x: T): T => x.copy().fround();

NDArray.prototype.fround = function<T extends NDArray>(this: T): T {
  const { length: l1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    this.set(i, Math.fround(this.get(i)));
  }

  return this;
};
