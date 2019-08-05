import { NDArray } from './';

NDArray.sinh = <T extends NDArray>(x: T): T => x.copy().sinh();

NDArray.prototype.sinh = function<T extends NDArray>(this: T): T {
  const { length: l1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    this.set(i, Math.sinh(this.get(i)));
  }

  return this;
};
