import { NDArray } from './';
/**
 * @static
 * @memberof vectorious
 * @function subtract
 * @description
 * Subtracts `y` from `x`.
 * Accelerated with BLAS `?axpy`.
 * @param {NDArray} x
 * @returns {NDArray}
 * @example
 * import { subtract } from 'vectorious/core/subtract';
 *
 * subtract([1, 2, 3], [1, 1, 1]); // => array([0, 1, 2])
 */
export declare const subtract: (x: NDArray | ArrayLike<any>, y: NDArray | ArrayLike<any>) => NDArray;
export default function (this: NDArray, x: NDArray): NDArray;
