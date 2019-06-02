import { IMatrix } from '../types';

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
export function rowAdd<T extends IMatrix>(this: T, dest: number, source: number, scalar: number = 1): T {
  this.check(dest, 0);
  this.check(source, 0);

  const { data: d1 } = this;
  const c: number = this.shape[1];

  let j: number;
  for (j = 0; j < c; j += 1) {
    d1[dest * c + j] += d1[source * c + j] * scalar;
  }

  return this;
}
