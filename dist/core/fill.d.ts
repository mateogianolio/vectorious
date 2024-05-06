import { NDArray } from './';
/**
 * @static
 * @memberof vectorious
 * @function fill
 * @description Fills `x` with a scalar value
 * @param {NDArray} x
 * @param {Number} value
 * @returns {NDArray}
 * @example
 * import { fill } from 'vectorious/core/fill';
 *
 * fill([1, 2, 3], 0); // => array([0, 0, 0])
 */
export declare const fill: (x: NDArray | ArrayLike<any>, value?: number | ((index: number) => number)) => NDArray;
export default function (this: NDArray, value?: number | ((index: number) => number)): NDArray;
