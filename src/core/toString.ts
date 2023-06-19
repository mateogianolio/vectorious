import { inspect } from 'util';

import { NDArray } from './';
import { array } from './array';

/**
 * @static
 * @memberof vectorious
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

export default function (this: NDArray): string {
  return `array(${inspect(this.toArray(), { depth: 10, breakLength: 40 })}, dtype=${this.dtype})`;
}
