import { Matrix } from './';

/**
 * Determines the inverse of `x` using
 * Gaussian elimination.
 */
Matrix.inverse = <T extends Matrix>(x: T): T => x.inverse();

/**
 * Determines the inverse of current matrix using
 * Gaussian elimination.
 */
Matrix.prototype.inverse = function<T extends Matrix>(this: T): T {
  this.square();

  const [r, c] = this.shape;
  const { length: l1 } = this;

  const identity: T = Matrix.eye(r);
  const rref: T = Matrix.augment(this, identity).gauss();
  const left: T = Matrix.zeros(r, c);
  const right: T = Matrix.zeros(r, c);

  const { data: d1 } = left;
  const { data: d2 } = right;
  const { data: d3 } = rref;
  const n: number = c + r;

  let i: number;
  let j: number;

  for (i = 0; i < r; i += 1) {
    for (j = 0; j < n; j += 1) {
      if (j < c) {
        d1[i * c + j] = d3[i * n + j];
      } else {
        d2[i * c + (j - r)] = d3[i * n + j];
      }
    }
  }

  if (!left.equals(identity)) {
    throw new Error('matrix is not invertible');
  }

  this.data = d2;
  this.length = l1;
  this.shape = [r, c];

  return this;
};
