import { NDArray } from './';

NDArray.transpose = <T extends NDArray>(x: T): T => x.copy().transpose();

NDArray.prototype.transpose = function<T extends NDArray>(this: T): T {
  const [r, c] = this.shape;
  const out: T = this.copy().reshape(c, r);

  let i: number;
  let j: number;
  for (i = 0; i < r; i += 1) {
    for (j = 0; j < c; j += 1) {
      out.set(j, i, this.get(i, j));
    }
  }

  return out;
};
