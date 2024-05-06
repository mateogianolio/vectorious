import { NDArray } from './';
/**
 * @static
 * @memberof vectorious
 * @function sign
 * @description
 * Returns the sign of each element of `x`, indicating
 * whether it is positive, negative or zero.
 * @param {Number} x
 * @returns {NDArray}
 * @example
 * import { sign } from 'vectorious/core/sign';
 *
 * sign([1, 2, 3]); // => array([1, 1, 1])
 */
export declare const sign: (x: NDArray | ArrayLike<any>) => NDArray;
export default function (this: NDArray): NDArray;
