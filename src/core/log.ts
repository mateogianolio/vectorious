import { NDArray } from './';

NDArray.log = <T extends NDArray>(x: T): T => x.copy().log();

NDArray.prototype.log = function<T extends NDArray>(this: T): T {
  const { length: l1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    this.set(i, Math.log(this.get(i)));
  }

  return this;
};
