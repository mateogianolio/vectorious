import { NDArray } from './';
/**
 * @static
 * @memberof vectorious
 * @function scale
 * @description
 * Multiplies all elements of `x` with a specified `scalar`.
 * Accelerated with BLAS `?scal`.
 * @param {NDArray} x
 * @param {Number} scalar
 * @returns {NDArray}
 * @example
 * import { scale } from 'vectorious/core/scale';
 *
 * scale([1, 2, 3], 2); // => array([2, 4, 6])
 */
export declare const scale: (x: NDArray | ArrayLike<any>, scalar: number) => NDArray;
export default function (this: NDArray, scalar: number): NDArray;
