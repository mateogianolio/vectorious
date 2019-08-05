import { NDArray } from './';

NDArray.fill = <T extends NDArray>(x: T, value: number | ((index: number) => number) = 0): T => x.copy().fill(value);

NDArray.prototype.fill = function<T extends NDArray>(this: T, value: number | ((index: number) => number) = 0): T {
  const { length: l1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    this.set(i, value instanceof Function ? value(i) : value);
  }

  return this;
};
