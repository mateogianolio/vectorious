import { NDArray } from './';
/**
 * @static
 * @memberof vectorious
 * @function reshape
 * @description Reshapes `x`
 * @param {NDArray} x
 * @param {Number[]} ...shape
 * @returns {NDArray}
 * @example
 * import { reshape } from 'vectorious/core/reshape';
 *
 * reshape([1, 2, 3, 4], 2, 2); // => array([[1, 2], [3, 4]])
 */
export declare const reshape: (x: NDArray | ArrayLike<any>, ...shape: number[]) => NDArray;
export default function (this: NDArray, ...shape: number[]): NDArray;
