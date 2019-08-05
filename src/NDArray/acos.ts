import { NDArray } from './';

NDArray.acos = <T extends NDArray>(x: T): T => x.copy().acos();

NDArray.prototype.acos = function<T extends NDArray>(this: T): T {
  const { length: l1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    this.set(i, Math.acos(this.get(i)));
  }

  return this;
};
