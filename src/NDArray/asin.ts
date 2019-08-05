import { NDArray } from './';

NDArray.asin = <T extends NDArray>(x: T): T => x.copy().asin();

NDArray.prototype.asin = function<T extends NDArray>(this: T): T {
  const { length: l1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    this.set(i, Math.asin(this.get(i)));
  }

  return this;
};
