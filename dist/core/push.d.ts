import { NDArray } from './';
/**
 * @static
 * @memberof vectorious
 * @function push
 * @description Pushes a new `value` into `x`.
 * @param {NDArray} x
 * @param {Number} value
 * @returns {NDArray}
 * @example
 * import { push } from 'vectorious/core/push';
 *
 * push([1, 2, 3], 4); // => array([1, 2, 3, 4])
 */
export declare const push: (x: NDArray | ArrayLike<any>, value: number) => NDArray;
export default function (this: NDArray, value: number): NDArray;
