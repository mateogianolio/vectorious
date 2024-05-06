import { NDArray } from './';
/**
 * @static
 * @memberof vectorious
 * @function rank
 * @description Finds the rank of `x` using gaussian elimination.
 * @param {NDArray} x
 * @param {Number} tolerance
 * @returns {Number}
 * @example
 * import { rank } from 'vectorious/core/rank';
 *
 * rank([[1, 1, 1], [2, 2, 2], [3, 3, 3]]); // => 1
 */
export declare const rank: (x: NDArray | ArrayLike<any>, tolerance?: number) => number;
export default function (this: NDArray, tolerance?: number): number;
