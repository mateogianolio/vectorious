import { NDArray } from './';
import { array } from './array';

/**
 * @static
 * @memberof module:Globals
 * @function row_add
 * @description Adds a multiple of one row multiplied by `scalar` to another inside `x`.
 * @param {NDArray} x
 * @param {Number} dest
 * @param {Number} source
 * @param {Number} scalar
 * @returns {NDArray}
 * @example
 * import { row_add } from 'vectorious/core/row_add';
 * 
 * row_add([[1, 2], [3, 4]], 1, 0, 2); // => array([[1, 2], [5, 8]])
 */
export const row_add = (
  x: NDArray | ArrayLike<any>,
  dest: number,
  source: number,
  scalar: number = 1
): NDArray =>
  array(x).row_add(dest, source, scalar);

/**
 * @function row_add
 * @memberof NDArray.prototype
 * @description Adds a multiple of one row multiplied by `scalar` to another inside current matrix.
 * @param {Number} dest
 * @param {Number} source
 * @param {Number} scalar
 * @returns {this}
 * @example
 * import { array } from 'vectorious/core/array';
 * 
 * array([[1, 2], [3, 4]]).row_add(1, 0, 2); // <=> array([[1, 2], [5, 8]])
 */
export default function(this: NDArray, dest: number, source: number, scalar: number = 1): NDArray {
  this.check(dest, 0);
  this.check(source, 0);

  const [, c] = this.shape;
  const { data: d1 } = this;

  let j: number;
  for (j = 0; j < c; j += 1) {
    d1[dest * c + j] += d1[source * c + j] * scalar;
  }

  return this;
};
