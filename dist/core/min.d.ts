import { NDArray } from './';
/**
 * @static
 * @memberof vectorious
 * @function min
 * @description Gets the minimum value (smallest) element of `x`.
 * @param {NDArray} x
 * @returns {Number}
 * @example
 * import { min } from 'vectorious/core/min';
 *
 * min([1, 2, 3]); // => 1
 */
export declare const min: (x: NDArray | ArrayLike<any>) => number;
export default function (this: NDArray): number;
