import { NDArray } from './';

NDArray.binOp = <T extends NDArray>(
  x: T | ArrayLike<any>,
  y: T | ArrayLike<any>,
  f: (
    a: number,
    b: number,
    index: number
  ) => number
): T => NDArray.array<T>(x).binOp(NDArray.array<T>(y), f);

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

  const { data: d1, length: l1 } = this;
  const { data: d2 } = x;

  let i: number;
  for (i = 0; i < l1; i += 1) {
    d1[i] = f(d1[i], d2[i], i);
  }

  return this;
};
