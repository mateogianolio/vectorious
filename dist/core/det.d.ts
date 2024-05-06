import { NDArray } from './';
/**
 * @static
 * @memberof vectorious
 * @function det
 * @description Gets the determinant of `x`.
 * @param {NDArray} x
 * @returns {Number}
 * @example
 * import { det } from 'vectorious/core/det';
 *
 * det([[0, 1], [2, 3]]); // => -2
 */
export declare const det: (x: NDArray | ArrayLike<any>) => number;
export default function (this: NDArray): number;
