import { NDArray } from './';
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
export declare const toString: (x: NDArray | ArrayLike<any>) => string;
export default function (this: NDArray): string;
