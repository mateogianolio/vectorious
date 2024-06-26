import { NDArray } from './';
/**
 * @static
 * @memberof vectorious
 * @function floor
 * @description Returns the largest integer less than or equal to a number of each element of `x`.
 * @param {NDArray} x
 * @returns {NDArray}
 * @example
 * import { floor } from 'vectorious/core/floor';
 *
 * floor([1.5, 2.5, 3.5]); // => array([1, 2, 3])
 */
export declare const floor: (x: NDArray | ArrayLike<any>) => NDArray;
export default function (this: NDArray): NDArray;
