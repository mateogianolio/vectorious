import { Matrix } from './';

Matrix.rowAdd = <T extends Matrix>(x: T, dest: number, source: number, scalar: number = 1): T =>
  x.copy().rowAdd(dest, source, scalar);

Matrix.prototype.rowAdd = function<T extends Matrix>(this: T, dest: number, source: number, scalar: number = 1): T {
  this.check(dest, 0);
  this.check(source, 0);

  const [, c] = this.shape;

  let j: number;
  for (j = 0; j < c; j += 1) {
    this.set(dest, j, this.get(dest, j) + this.get(source, j) * scalar);
  }

  return this;
};
