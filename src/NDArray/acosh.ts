import { NDArray } from './';

NDArray.acosh = <T extends NDArray>(x: T): T => x.copy().acosh();

NDArray.prototype.acosh = function<T extends NDArray>(this: T): T {
  const { length: l1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    this.set(i, Math.acosh(this.get(i)));
  }

  return this;
};
