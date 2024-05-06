import { NDArray } from './';
/**
 * @static
 * @memberof vectorious
 * @function dot
 * @description
 * Performs dot multiplication with `x` and `y`.
 * Accelerated with BLAS `?dot`.
 * @param {NDArray} x
 * @param {NDArray} y
 * @returns {Number}
 * @example
 * import { dot } from 'vectorious/core/dot';
 *
 * dot([1, 2, 3], [4, 5, 6]); // => 32
 */
export declare const dot: (x: NDArray | ArrayLike<any>, y: NDArray | ArrayLike<any>) => number;
export default function (this: NDArray, x: NDArray): number;
