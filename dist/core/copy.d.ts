import { NDArray } from './';
/**
 * @static
 * @memberof vectorious
 * @function copy
 * @description Makes a copy of `x`
 * @param {NDArray} x
 * @returns {NDArray}
 * @example
 * import { copy } from 'vectorious/core/copy';
 *
 * copy([1, 2, 3]); // => array([1, 2, 3])
 */
export declare const copy: (x: NDArray | ArrayLike<any>) => NDArray;
export default function (this: NDArray): NDArray;
