import { NDArray } from './';

NDArray.sign = <T extends NDArray>(x: T): T => x.copy().sign();

NDArray.prototype.sign = function<T extends NDArray>(this: T): T {
  const { length: l1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    this.set(i, Math.sign(this.get(i)));
  }

  return this;
};
