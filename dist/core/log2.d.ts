import { NDArray } from './';
/**
 * @static
 * @memberof vectorious
 * @function log2
 * @description Returns the base 2 logarithm of each element of `x`.
 * @param {NDArray} x
 * @returns {NDArray}
 * @example
 * import { log2 } from 'vectorious/core/log2';
 *
 * log2([1, 2, 4]); // => array([0, 1, 2])
 */
export declare const log2: (x: NDArray | ArrayLike<any>) => NDArray;
export default function (this: NDArray): NDArray;
