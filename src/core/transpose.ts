import { NDArray } from './';
import { array } from './array';

/**
 * @static
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
 * array([[1, 2, 3], [4, 5, 6], [7, 8, 9]]); // => array([[1, 4, 7], [2, 5, 8], [3, 6, 9]])
 */
export default function(this: NDArray): NDArray {
  const [r, c] = this.shape;
  const { data: d1 } = this;
  const x = this.copy().reshape(c, r);
  const { data: d2 } = x;

  let i: number;
  let j: number;
  for (i = 0; i < r; i += 1) {
    for (j = 0; j < c; j += 1) {
      d2[j * r + i] = d1[i * c + j];
    }
  }

  return x;
};
