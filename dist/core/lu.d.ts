import { NDArray } from './';
/**
 * @static
 * @memberof vectorious
 * @function lu
 * @description
 * Performs full LU decomposition on `x`.
 * Accelerated with LAPACK `?getrf`.
 * @param {NDArray} x
 * @returns {Array<NDArray, Int32Array>}
 * @example
 * import { lu } from 'vectorious/core/lu';
 *
 * lu([[1, 3, 5], [2, 4, 7], [1, 1, 0]]); // => [array([[1, 0, 0], [0.5, 1, 0], [0.5, -1, 1]]), array([[2, 4, 7], [0, 1, 1.5], [0, 0, -2]]), Int32Array([2, 2, 3])]
 */
export declare const lu: (x: NDArray | ArrayLike<any>) => [NDArray, NDArray, Int32Array];
export default function (this: NDArray): [NDArray, NDArray, Int32Array];
