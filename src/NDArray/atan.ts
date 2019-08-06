import { NDArray } from './';

NDArray.atan = <T extends NDArray>(x: T): T => x.copy().atan();

NDArray.prototype.atan = function<T extends NDArray>(this: T): T {
  const { length: l1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    this.set(i, Math.atan(this.get(i)));
  }

  return this;
};
