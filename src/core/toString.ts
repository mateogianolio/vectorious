import { inspect } from 'util';

import { NDArray } from './';
import { array } from './array';

/**
 * @static
 * @memberof module:Globals
 * @function toString
 * @description Converts `x` into a readable formatted string.
 * @param {NDArray} x
 * @returns {String}
 * @example
 * import { toString } from 'vectorious/core/toString';
 *
 * toString([1, 2, 3]); // => '1,2,3'
 */
export const toString = (x: NDArray | ArrayLike<any>): string => array(x).toString();

/**
 * @function toString
 * @memberof NDArray.prototype
 * @description Converts current vector into a readable formatted string.
 * @returns {String}
 * @example
 * import { array } from 'vectorious/core/array';
 *
 * array([1, 2, 3]).toString(); // => '1,2,3'
 */
export default function (this: NDArray): string {
  return `array(${inspect(this.toArray(), { depth: 10, breakLength: 40 })}, dtype=${this.dtype})`;
}
