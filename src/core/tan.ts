import { NDArray } from './';
import { array } from './array';
import { NDIter } from '../iterator';

const { tan: f } = Math;

/**
 * @static
 * @memberof module:Globals
 * @function tan
 * @description Returns the tangent of each element of `x`.
 * @param {NDArray} x
 * @returns {NDArray}
 * @example
 * import { tan } from 'vectorious/core/tan';
 *
 * tan([1, 2, 3]); // => array([1.5574077367782593, -2.185039758682251, -0.14254654943943024])
 */
export const tan = (x: NDArray | ArrayLike<any>): NDArray => array(x).tan();

/**
 * @function tan
 * @memberof NDArray.prototype
 * @description Returns the tangent of each element of current array.
 * @returns {this}
 * @example
 * import { array } from 'vectorious/core/array';
 *
 * array([1, 2, 3]).tan(); // <=> array([1.5574077367782593, -2.185039758682251, -0.14254654943943024])
 */
export default function (this: NDArray): NDArray {
  const { data: d1 } = this;
  const iter = new NDIter(this);

  for (const i of iter) {
    d1[i] = f(d1[i]);
  }

  return this;
}
