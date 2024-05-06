import { NDArray } from './';
/**
 * @static
 * @memberof vectorious
 * @function atan
 * @description Returns the arctangent of each element of `x`.
 * @param {NDArray} x
 * @returns {NDArray}
 * @example
 * import { atan } from 'vectorious/core/atan';
 *
 * atan([1, 2, 3]); // => array([0.7853981852531433, 1.1071487665176392, 1.249045729637146])
 */
export declare const atan: (x: NDArray | ArrayLike<any>) => NDArray;
export default function (this: NDArray): NDArray;
