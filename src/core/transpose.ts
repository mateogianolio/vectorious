import { NDArray } from './';

NDArray.transpose = <T extends NDArray>(x: T | ArrayLike<any>): T =>
  NDArray.array<T>(x).transpose();

NDArray.prototype.transpose = function<T extends NDArray>(this: T): T {
  const [r, c] = this.shape;
  const { data: d1 } = this;
  const x: T = this.copy().reshape(c, r);
  const { data: d2 } = x;

  let i: number;
  let j: number;
  for (i = 0; i < r; i += 1) {
    for (j = 0; j < c; j += 1) {
      d2[j * r + i] = d1[i * c + j];
    }
  }

  return x;
};
