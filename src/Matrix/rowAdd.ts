import { Matrix } from './';

/**
 * Adds a multiple of one row to another inside `x`.
 */
Matrix.rowAdd = <T extends Matrix>(x: T, dest: number, source: number, scalar: number = 1): T =>
  x.copy().rowAdd(dest, source, scalar);

/**
 * Adds a multiple of one row to another inside a matrix.
 * INPUT:
 *        - dest (destination) is the row for adding the other
 *          row that was multiplied with the scalar.
 *        - source : is the row that would be multiplied with
 *          the scalar (for adding)
 *        - scalar : the scalar of type number.
 * OUTPUT: The current changed matrix.
 */
Matrix.prototype.rowAdd = function<T extends Matrix>(this: T, dest: number, source: number, scalar: number = 1): T {
  this.check(dest, 0);
  this.check(source, 0);

  const { data: d1 } = this;
  const [, c] = this.shape;

  let j: number;
  for (j = 0; j < c; j += 1) {
    d1[dest * c + j] += d1[source * c + j] * scalar;
  }

  return this;
};
