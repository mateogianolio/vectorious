import { NDArray } from './';
/**
 * @static
 * @memberof vectorious
 * @function sin
 * @description Returns the sine of each element of `x`.
 * @param {NDArray} x
 * @returns {NDArray}
 * @example
 * import { sin } from 'vectorious/core/sin';
 *
 * sin([0, Math.PI / 2, Math.PI]); // => array([0, 1, 0])
 */
export declare const sin: (x: NDArray | ArrayLike<any>) => NDArray;
export default function (this: NDArray): NDArray;
