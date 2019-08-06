import { Matrix } from './';

Matrix.augment = <T extends Matrix>(x: T, y: T): T => x.copy().augment(y);

Matrix.prototype.augment = function<T extends Matrix>(this: T, x: T): T {
  const [r1, c1] = this.shape;
  const [r2, c2] = x.shape;

  if (r2 === 0 || c2 === 0) {
    return this;
  }

  if (r1 !== r2) {
    throw new Error('rows do not match');
  }

  const y: Matrix = new Matrix(r1, c1 + c2);

  let i: number;
  let j: number;
  for (i = 0; i < r1; i += 1) {
    for (j = 0; j < c1; j += 1) {
      y.set(i, j, this.get(i, j));
    }
  }

  for (i = 0; i < r2; i += 1) {
    for (j = 0; j < c2; j += 1) {
      y.set(i, j + c1, x.get(i, j));
    }
  }

  return y as T;
};
