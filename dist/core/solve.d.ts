import { NDArray } from './';
/**
 * @static
 * @memberof vectorious
 * @function solve
 * @description
 * Solves the equation AX = B (where A is `x` and B is `y`).
 * Accelerated with LAPACK `?gesv`.
 * @param {NDArray} x
 * @param {NDArray} y
 * @returns {NDArray}
 * @example
 * import { solve } from 'vectorious/core/solve';
 *
 * solve([[1, 3, 5], [2, 4, 7], [1, 1, 0]], [[1], [3], [5]]); // => array([[3.25], [1.75], [-1.5]])
 */
export declare const solve: (x: NDArray | ArrayLike<any>, y: NDArray | ArrayLike<any>) => NDArray;
export default function (this: NDArray, x: NDArray): NDArray;
