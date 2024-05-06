import { NDArray } from './';
/**
 * @static
 * @memberof vectorious
 * @function expm1
 * @description Returns subtracting 1 from exp(x) of each element of `x`.
 * @param {NDArray} x
 * @returns {NDArray}
 * @example
 * import { expm1 } from 'vectorious/core/expm1';
 *
 * expm1([1, 2, 3]); // => array([1.7182817459106445, 6.389056205749512, 19.08553695678711])
 */
export declare const expm1: (x: NDArray | ArrayLike<any>) => NDArray;
export default function (this: NDArray): NDArray;
