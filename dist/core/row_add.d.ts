import { NDArray } from './';
/**
 * @static
 * @memberof vectorious
 * @function row_add
 * @description Adds a multiple of one row multiplied by `scalar` to another inside `x`.
 * @param {NDArray} x
 * @param {Number} dest
 * @param {Number} source
 * @param {Number} scalar
 * @returns {NDArray}
 * @example
 * import { row_add } from 'vectorious/core/row_add';
 *
 * row_add([[1, 2], [3, 4]], 1, 0, 2); // => array([[1, 2], [5, 8]])
 */
export declare const row_add: (x: NDArray | ArrayLike<any>, dest: number, source: number, scalar?: number) => NDArray;
export default function (this: NDArray, dest: number, source: number, scalar?: number): NDArray;
