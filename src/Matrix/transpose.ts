import { Matrix } from './';

Matrix.transpose = <T extends Matrix>(x: T): T => x.copy().transpose();

Matrix.prototype.transpose = function<T extends Matrix>(this: T): T {
  const [r, c] = this.shape;
  const n: number = Math.min(r, c);

  let i: number;
  let j: number;
  for (i = 0; i < n; i += 1) {
    for (j = i; j < n; j += 1) {
      const temp: number = this.get(i, j);
      this.set(i, j, this.get(j, i));
      this.set(j, i, temp);
    }
  }

  return this.reshape(c, r);
};
