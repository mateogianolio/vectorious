import { NDArray } from './';
/**
 * @static
 * @memberof vectorious
 * @function cross
 * @description
 * Computes the cross product of the `x` and the vector `y`
 * This operation can only calculated for vectors with three components.
 * Otherwise it throws an exception.
 * @param {NDArray} x
 * @param {NDArray} y
 * @returns {NDArray}
 * @example
 * import { cross } from 'vectorious/core/cross';
 *
 * cross([1, 2, 3], [4, 5, 6]); // => array([-3, 6, -3])
 */
export declare const cross: (x: NDArray | ArrayLike<any>, y: NDArray | ArrayLike<any>) => NDArray;
export default function (this: NDArray, x: NDArray): NDArray;
