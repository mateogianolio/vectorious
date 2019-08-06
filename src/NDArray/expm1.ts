import { NDArray } from './';

NDArray.expm1 = <T extends NDArray>(x: T): T => x.copy().expm1();

NDArray.prototype.expm1 = function<T extends NDArray>(this: T): T {
  const { length: l1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    this.set(i, Math.expm1(this.get(i)));
  }

  return this;
};
