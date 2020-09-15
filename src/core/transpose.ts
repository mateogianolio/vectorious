import { NDArray } from './';
import { array } from './array';

/**
 * @static
 * @memberof module:Globals
 * @function transpose
 * @description Transposes `x` (mirror across the diagonal).
 * @param {NDArray} x
 * @returns {NDArray}
 * @example
 * import { transpose } from 'vectorious/core/transpose';
 * 
 * transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]]); // => array([[1, 4, 7], [2, 5, 8], [3, 6, 9]])
 */
export const transpose = (x: NDArray | ArrayLike<any>): NDArray =>
  array(x).transpose();

/**
 * @function transpose
 * @memberof NDArray.prototype
 * @description Transposes current matrix (mirror across the diagonal).
 * @returns {this}
 * @example
 * import { array } from 'vectorious/core/array';
 * 
 * array([[1, 2, 3], [4, 5, 6], [7, 8, 9]]); // <=> array([[1, 4, 7], [2, 5, 8], [3, 6, 9]])
 */
export default function(this: NDArray): NDArray {
  if (this.shape.length < 2) {
    return this;
  }

  let tmp = this.shape[0];
  this.shape[0] = this.shape[1];
  this.shape[1] = tmp;

  tmp = this.strides[0];
  this.strides[0] = this.strides[1];
  this.strides[1] = tmp;

  return this;
};
