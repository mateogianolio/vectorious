import { Matrix } from './';

/**
 * Gets the diagonal of `x`.
 */
Matrix.diagonal = <T extends Matrix>(x: T): T => x.copy().diagonal();

/**
 * Gets the diagonal of current matrix.
 */
Matrix.prototype.diagonal = function<T extends Matrix>(this: T): T {
  this.square();

  const { length: l1 } = this;
  const [r, c] = this.shape;
  const l2: number = Math.min(r, c);

  return this.reshape([l1]).slice(0, l1, l2 + 1);
};
