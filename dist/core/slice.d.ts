import { NDArray } from './';
/**
 * @static
 * @memberof vectorious
 * @function slice
 * @description Slices `x` in the corresponding dimension
 * @param {NDArray} x
 * @param {Number} begin
 * @param {Number} end
 * @param {Number} step
 * @returns {NDArray}
 * @example
 * import { slice } from 'vectorious/core/slice';
 *
 * slice([1, 2, 3, 4], 0, 4, 2); // => array([1, 3])
 */
export declare const slice: (x: NDArray | ArrayLike<any>, begin?: number, end?: number, step?: number) => NDArray;
export default function (this: NDArray, begin?: number, end?: number, step?: number): NDArray;
