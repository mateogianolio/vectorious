import { NDArray } from './';
/**
 * @static
 * @memberof vectorious
 * @function reciprocal
 * @description Gets the element-wise reciprocal of `x`.
 * @param {NDArray} x
 * @returns {NDArray}
 * @example
 * import { reciprocal } from 'vectorious/core/reciprocal';
 *
 * reciprocal([1, 2, 3]); // => array([1, 0.5, 0.3333333432674408])
 */
export declare const reciprocal: (x: NDArray | ArrayLike<any>) => NDArray;
export default function (this: NDArray): NDArray;
