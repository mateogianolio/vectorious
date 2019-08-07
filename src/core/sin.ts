import { NDArray } from './';

NDArray.sin = <T extends NDArray>(x: T): T => x.copy().sin();

NDArray.prototype.sin = function<T extends NDArray>(this: T): T {
  const { length: l1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    this.set(i, Math.sin(this.get(i)));
  }

  return this;
};
