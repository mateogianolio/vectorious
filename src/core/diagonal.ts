import { NDArray, array } from './';

/**
 * @static
 * @function diagonal
 * @description Gets the diagonal of `x`.
 * @param {NDArray} x
 * @returns {NDArray}
 * @example
 * import { diagonal } from 'vectorious/core/diagonal';
 * 
 * diagonal([[1, 2], [3, 4]]); // => array([1, 4])
 */
export const diagonal = (x: NDArray | ArrayLike<any>): NDArray =>
  array(x).diagonal();

/**
 * @function diagonal
 * @memberof NDArray.prototype
 * @description Gets the diagonal of current matrix.
 * @returns {this}
 * @example
 * import { array } from 'vectorious/core/array';
 * 
 * array([1, 2, 3]).diagonal(); // => array([1, 4])
 */
export default function(this: NDArray): NDArray {
  this.square();

  const { length: l1 } = this;
  const [r, c] = this.shape;
  const l2: number = Math.min(r, c);

  return this.reshape(l1).slice(0, l1, l2 + 1);
};
