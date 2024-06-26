import { NDArray } from './';
/**
 * @static
 * @memberof vectorious
 * @function toArray
 * @description Converts `x` into a JavaScript array.
 * @param {NDArray} x
 * @returns {Array}
 * @example
 * import { toArray } from 'vectorious/core/toArray';
 *
 * toArray([1, 2, 3]); // => [1, 2, 3]
 */
export declare const toArray: (x: NDArray | ArrayLike<any>) => any;
export default function (this: NDArray, index?: number, dim?: number): any;
