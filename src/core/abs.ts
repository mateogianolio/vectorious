import { NDArray } from './';
import { array } from './array';
import { NDIter } from '../iterator';

const { abs: f } = Math;

/**
 * @static
 * @memberof module:Globals
 * @function abs
 * @description Returns the absolute value of each element of `x`.
 * @param {NDArray} x
 * @returns {NDArray}
 * @example
 * import { abs } from 'vectorious/core/abs';
 *
 * abs([-1, -2, -3]) // => array([1, 2, 3])
 */
export const abs = (x: NDArray | ArrayLike<any>): NDArray => array(x).abs();

/**
 * @function abs
 * @memberof NDArray.prototype
 * @description Returns the absolute value of each element of current array.
 * @returns {this}
 * @example
 * import { array } from 'vectorious/core/array';
 *
 * array([-1, -2, -3]).abs() // <=> array([1, 2, 3])
 */
export default function (this: NDArray): NDArray {
  const { data: d1 } = this;
  const iter = new NDIter(this);

  for (const i of iter) {
    d1[i] = f(d1[i]);
  }

  return this;
}
