import { NDArray } from './';
/**
 * @static
 * @memberof vectorious
 * @function multiply
 * @description
 * Multiplies two matrices `x` and `y` of matching dimensions.
 * Accelerated with BLAS `?gemm`.
 * @param {NDArray} x
 * @param {NDArray} y
 * @returns {NDArray}
 * @example
 * import { multiply } from 'vectorious/core/multiply';
 *
 * multiply([[1, 2]], [[1], [2]]); // => array([[5]])
 */
export declare const multiply: (x: NDArray | ArrayLike<any>, y: NDArray | ArrayLike<any>) => NDArray;
export default function (this: NDArray, x: NDArray): NDArray;
