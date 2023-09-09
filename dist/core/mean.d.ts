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
/**
 * @function mean
 * @memberof NDArray
 * @instance
 * @description Gets the arithmetic mean of current array.
 * @returns {Number}
 * @example
 * import { array } from 'vectorious/core/array';
 *
 * array([1, 2, 3]).mean(); // => 2
 */
export default function (this: NDArray): number;
