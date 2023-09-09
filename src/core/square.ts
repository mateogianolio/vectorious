import { NDArray } from './';
import { array } from './array';

/**
 * @static
 * @memberof vectorious
 * @function square
 * @description Asserts if `x` is square.
 * @param {NDArray} x
 * @throws {Error} matrix is not square
 * @example
 * import { square } from 'vectorious/core/square';
 *
 * square([1, 2, 3]); // Error: matrix is not square
 */
export const square = (x: NDArray | ArrayLike<any>): void => {
  array(x).square();
};

export default function (this: NDArray): void {
  const { length } = this.shape;
  const [r, c] = this.shape;

  if (length !== 2 || r !== c) {
    throw new Error('matrix is not square');
  }
}
