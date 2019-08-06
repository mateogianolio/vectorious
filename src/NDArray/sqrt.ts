import { NDArray } from './';

NDArray.sqrt = <T extends NDArray>(x: T): T => x.copy().sqrt();

NDArray.prototype.sqrt = function<T extends NDArray>(this: T): T {
  const { length: l1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    this.set(i, Math.sqrt(this.get(i)));
  }

  return this;
};
