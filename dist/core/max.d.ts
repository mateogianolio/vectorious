import { NDArray } from './';
/**
 * @static
 * @memberof vectorious
 * @function max
 * @description
 * Gets the maximum value (largest) element of `x`.
 * Accelerated with BLAS `i?amax`.
 * @param {NDArray} x
 * @returns {Number}
 * @example
 * import { max } from 'vectorious/core/max';
 *
 * max([1, 2, 3]); // => 3
 */
export declare const max: (x: NDArray | ArrayLike<any>) => number;
export default function (this: NDArray): number;
