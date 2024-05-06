import { NDArray } from './';
/**
 * @static
 * @memberof vectorious
 * @function combine
 * @description Combines the vector `x` with `y`
 * @param {NDArray} x
 * @param {NDArray} y
 * @returns {NDArray}
 * @example
 * import { combine } from 'vectorious/core/combine';
 *
 * combine([1, 2, 3], [4, 5, 6]); // => array([1, 2, 3, 4, 5, 6])
 */
export declare const combine: (x: NDArray | ArrayLike<any>, y: NDArray | ArrayLike<any>) => NDArray;
export default function (this: NDArray, x: NDArray): NDArray;
