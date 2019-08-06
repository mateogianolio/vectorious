import { NDArray } from './';

NDArray.tanh = <T extends NDArray>(x: T): T => x.copy().tanh();

NDArray.prototype.tanh = function<T extends NDArray>(this: T): T {
  const { length: l1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    this.set(i, Math.tanh(this.get(i)));
  }

  return this;
};
