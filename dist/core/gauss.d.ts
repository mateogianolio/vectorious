import { NDArray } from './';
/**
 * @static
 * @memberof vectorious
 * @function gauss
 * @description
 * Gauss-Jordan elimination (i.e. returns the reduced row echelon form) of `x`.
 * @param {NDArray} x
 * @returns {NDArray}
 * @example
 * import { gauss } from 'vectorious/core/gauss';
 *
 * gauss([[1, 2, 3], [4, 5, 6]]); // => array([[1, 0, -1], [-0, 1, 2]])
 */
export declare const gauss: (x: NDArray | ArrayLike<any>) => NDArray;
export default function (this: NDArray): NDArray;
