import { NDArray } from './';

/**
 * @static
 * @function subtract
 * @memberof NDArray
 * @description
 * Subtracts `y` from `x`.
 * Accelerated with BLAS `?axpy`.
 * @param {NDArray} x
 * @returns {NDArray}
 * @example
 * import { subtract } from 'vectorious/core/subtract';
 * 
 * subtract([1, 2, 3], [1, 1, 1]); // => array([0, 1, 2])
 */
export const subtract = (x: NDArray | ArrayLike<any>, y: NDArray | ArrayLike<any>): NDArray =>
  NDArray.array(x).subtract(NDArray.array(y));

/**
 * @function subtract
 * @memberof NDArray.prototype
 * @description
 * Subtracts `x` from the current array.
 * Accelerated with BLAS `?axpy`.
 * @returns {this}
 * @example
 * import { array } from 'vectorious/core/array';
 * 
 * array([1, 2, 3]).subtract([1, 1, 1]); // <=> array([0, 1, 2])
 */
export default function (this: NDArray, x: NDArray): NDArray {
  return this.add(x, -1);
};
