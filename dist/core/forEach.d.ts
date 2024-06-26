import { TypedArray } from '../types';
import { NDArray } from './';
/**
 * @static
 * @memberof vectorious
 * @function forEach
 * @description Equivalent to `TypedArray.prototype.forEach`.
 * @param {NDArray} x
 * @param {Function} f
 * @example
 * import { forEach } from 'vectorious/core/forEach';
 *
 * forEach([1, 2, 3], console.log);
 * // 1 0 [ 1, 2, 3 ]
 * // 2 1 [ 1, 2, 3 ]
 * // 3 2 [ 1, 2, 3 ]
 */
export declare const forEach: (x: NDArray, f: (value: number, i: number, src: TypedArray) => void) => void;
export default function (this: NDArray, f: (value: number, i: number, src: TypedArray) => void): void;
