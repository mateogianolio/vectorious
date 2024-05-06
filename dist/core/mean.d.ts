import { NDArray } from './';
/**
 * @static
 * @memberof vectorious
 * @function mean
 * @description Gets the arithmetic mean of `x`.
 * @param {NDArray} x
 * @returns {Number}
 * @example
 * import { mean } from 'vectorious/core/mean';
 *
 * mean([1, 2, 3]); // => 2
 */
export declare const mean: (x: NDArray | ArrayLike<any>) => number;
export default function (this: NDArray): number;
