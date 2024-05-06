import { NDArray } from './';
/**
 * @static
 * @memberof vectorious
 * @function cbrt
 * @description Returns the cube root of each element of `x`.
 * @param {NDArray} x
 * @returns {NDArray}
 * @example
 * import { cbrt } from 'vectorious/core/cbrt';
 *
 * cbrt([1, 8, 27]); // => array([1, 2, 3])
 */
export declare const cbrt: (x: NDArray | ArrayLike<any>) => NDArray;
export default function (this: NDArray): NDArray;
