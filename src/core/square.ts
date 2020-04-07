import { NDArray } from './';

/**
 * @static
 * @function square
 * @memberof NDArray
 * @description Asserts if `x` is square.
 * @param {NDArray} x
 * @throws {Error} matrix is not square
 * @example
 * import { square } from 'vectorious/core/square';
 * 
 * square([1, 2, 3]); // Error: matrix is not square
 */
export const square = (x: NDArray | ArrayLike<any>): void => {
  NDArray.array(x).square();
};

/**
 * @function square
 * @memberof NDArray.prototype
 * @description Asserts if current matrix is square.
 * @throws {Error} matrix is not square
 * @example
 * import { array } from 'vectorious/core/array';
 * 
 * array([1, 2, 3]).square(); // Error: matrix is not square
 */
export default function(this: NDArray): void {
  const { length } = this.shape;
  const [r, c] = this.shape;

  if (length !== 2 || r !== c) {
    throw new Error('matrix is not square');
  }
};
