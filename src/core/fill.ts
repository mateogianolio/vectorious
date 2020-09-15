import { NDArray } from './';
import { array } from './array';
import { NDIter } from '../iterator';

/**
 * @static
 * @memberof module:Globals
 * @function fill
 * @description Fills `x` with a scalar value
 * @param {NDArray} x
 * @param {Number} value
 * @returns {NDArray}
 * @example
 * import { fill } from 'vectorious/core/fill';
 * 
 * fill([1, 2, 3], 0); // => array([0, 0, 0])
 */
export const fill = (
  x: NDArray | ArrayLike<any>,
  value: number | ((index: number) => number) = 0
): NDArray =>
  array(x).fill(value);

/**
 * @function fill
 * @memberof NDArray.prototype
 * @description Fills the current array with a scalar value
 * @param {Number} value
 * @returns {this}
 * @example
 * import { array } from 'vectorious/core/array';
 * 
 * array([1, 2, 3]).fill(0); // <=> array([0, 0, 0])
 */
export default function(this: NDArray, value: number | ((index: number) => number) = 0): NDArray {
  const { data: d1 } = this;
  const iter = new NDIter(this);

  for (const i of iter) {
    d1[i!] = value instanceof Function ? value(iter.pos) : value;
  }

  return this;
};
