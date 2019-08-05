import { NDArray } from './';

NDArray.binOp = <T extends NDArray>(
  x: T,
  y: T,
  f: (
    a: number,
    b: number,
    index: number
  ) => number
): T => x.copy().binOp(y, f);

NDArray.prototype.binOp = function<T extends NDArray>(
  this: T,
  x: T,
  f: (
    a: number,
    b: number,
    index: number
  ) => number
): T {
  this.equilateral(x);
  this.equidimensional(x);

  const { length: l1 } = this;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    this.set(i, f(this.get(i), x.get(i), i));
  }

  return this;
};
