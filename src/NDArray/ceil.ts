import { NDArray } from './';

NDArray.ceil = <T extends NDArray>(x: T): T => x.copy().ceil();

NDArray.prototype.ceil = function<T extends NDArray>(this: T): T {
  const { length: l1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    this.set(i, Math.ceil(this.get(i)));
  }

  return this;
};
