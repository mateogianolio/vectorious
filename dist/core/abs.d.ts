import { NDArray } from './';
/**
 * @static
 * @memberof vectorious
 * @function abs
 * @description Returns the absolute value of each element of `x`.
 * @param {NDArray} x
 * @returns {NDArray}
 * @example
 * import { abs } from 'vectorious/core/abs';
 *
 * abs([-1, -2, -3]) // => array([1, 2, 3])
 */
export declare const abs: (x: NDArray | ArrayLike<any>) => NDArray;
export default function (this: NDArray): NDArray;
