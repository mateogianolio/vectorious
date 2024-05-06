import { NDArray } from './';
/**
 * @static
 * @memberof vectorious
 * @function fround
 * @description Returns the nearest single precision float representation of each element of `x`.
 * @param {NDArray} x
 * @returns {NDArray}
 * @example
 * import { fround } from 'vectorious/core/fround';
 *
 * fround([-5.05, 5.05]); // => array([-5.050000190734863, 5.050000190734863])
 */
export declare const fround: (x: NDArray | ArrayLike<any>) => NDArray;
export default function (this: NDArray): NDArray;
