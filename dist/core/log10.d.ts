import { NDArray } from './';
/**
 * @static
 * @memberof vectorious
 * @function log10
 * @description Returns the base 10 logarithm of each element of `x`.
 * @param {NDArray} x
 * @returns {NDArray}
 * @example
 * import { log10 } from 'vectorious/core/log10';
 *
 * log10([10, 100, 1000]); // => array([1, 2, 3])
 */
export declare const log10: (x: NDArray | ArrayLike<any>) => NDArray;
export default function (this: NDArray): NDArray;
