import { NDArray } from './';

NDArray.round = <T extends NDArray>(x: T): T => x.copy().round();

NDArray.prototype.round = function<T extends NDArray>(this: T): T {
  const { length: l1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    this.set(i, Math.round(this.get(i)));
  }

  return this;
};
