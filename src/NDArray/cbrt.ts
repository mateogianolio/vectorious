import { NDArray } from './';

NDArray.cbrt = <T extends NDArray>(x: T): T => x.copy().cbrt();

NDArray.prototype.cbrt = function<T extends NDArray>(this: T): T {
  const { length: l1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    this.set(i, Math.cbrt(this.get(i)));
  }

  return this;
};
