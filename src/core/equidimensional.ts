import { NDArray } from './';

NDArray.equidimensional = <T extends NDArray>(x: T | ArrayLike<any>, y: T | ArrayLike<any>): void => {
  NDArray.array<T>(x).equidimensional(NDArray.array<T>(y));
};

NDArray.prototype.equidimensional = function<T extends NDArray>(this: T, x: T): void {
  const { shape: s1 } = this;
  const { shape: s2 } = x;

  if (!s1.every((dim: number, i: number) => dim === s2[i])) {
    throw new Error(`shapes ${s1} and ${s2} do not match`);
  }
};
