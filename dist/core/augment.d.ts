import { NDArray } from './';
/**
 * @static
 * @memberof vectorious
 * @function augment
 * @description Augments `x` and `y`.
 * @param {NDArray} x
 * @param {NDArray} y
 * @returns {NDArray}
 * @example
 * import { augment } from 'vectorious/core/augment';
 *
 * augment([[1, 2], [3, 4]], [[1], [2]]); // => array([[1, 2, 1], [3, 4, 2]])
 */
export declare const augment: (x: NDArray | ArrayLike<any>, y: NDArray | ArrayLike<any>) => NDArray;
export default function (this: NDArray, x: NDArray | ArrayLike<any>): NDArray;
