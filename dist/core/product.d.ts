import { NDArray } from './';
/**
 * @static
 * @memberof vectorious
 * @function product
 * @description Hadamard product of `x` and `y`
 * @param {NDArray} x
 * @param {NDArray} y
 * @returns {NDArray}
 * @example
 * import { product } from 'vectorious/core/product';
 *
 * product([1, 2, 3], [4, 5, 6]); // => array([4, 10, 18])
 */
export declare const product: (x: NDArray | ArrayLike<any>, y: NDArray | ArrayLike<any>) => NDArray;
export default function (this: NDArray, x: NDArray): NDArray;
