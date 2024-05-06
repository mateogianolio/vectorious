import { NDArray } from './';
/**
 * @static
 * @memberof vectorious
 * @function diagonal
 * @description Gets the diagonal of `x`.
 * @param {NDArray} x
 * @returns {NDArray}
 * @example
 * import { diagonal } from 'vectorious/core/diagonal';
 *
 * diagonal([[1, 2], [3, 4]]); // => array([1, 4])
 */
export declare const diagonal: (x: NDArray | ArrayLike<any>) => NDArray;
export default function (this: NDArray): NDArray;
