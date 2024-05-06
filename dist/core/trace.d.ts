import { NDArray } from './';
/**
 * @static
 * @memberof vectorious
 * @function trace
 * @description Gets the trace of `x` (the sum of all diagonal elements).
 * @param {NDArray} x
 * @returns {Number}
 * @example
 * import { trace } from 'vectorious/core/trace';
 *
 * trace([[1, 2], [3, 4]]); // => 5
 */
export declare const trace: (x: NDArray | ArrayLike<any>) => number;
export default function (this: NDArray): number;
