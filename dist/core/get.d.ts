import { NDArray } from './';
/**
 * @static
 * @memberof vectorious
 * @function get
 * @description Gets the element at `i, j, ..., n` from `x`
 * @param {NDArray} x
 * @param {Number[]} ...indices
 * @returns {Number}
 * @example
 * import { get } from 'vectorious/core/get';
 *
 * get([1, 2, 3], 2); // 3
 */
export declare const get: (x: NDArray | ArrayLike<any>, ...indices: number[]) => number;
export default function (this: NDArray, ...indices: number[]): number;
