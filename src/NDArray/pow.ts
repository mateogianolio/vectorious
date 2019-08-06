import { NDArray } from './';

NDArray.pow = <T extends NDArray>(x: T, exponent: number): T => x.copy().pow(exponent);

NDArray.prototype.pow = function<T extends NDArray>(this: T, exponent: number): T {
  const { length: l1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    this.set(i, Math.pow(this.get(i), exponent));
  }

  return this;
};
