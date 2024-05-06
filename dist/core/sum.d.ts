import { NDArray } from './';
/**
 * @static
 * @memberof vectorious
 * @function sum
 * @description Sum of `x`
 * @param {NDArray} x
 * @returns {Number}
 * @example
 * import { sum } from 'vectorious/core/sum';
 *
 * sum([1, 2, 3]); // => 6
 */
export declare const sum: (x: NDArray | ArrayLike<any>) => number;
export default function (this: NDArray): number;
