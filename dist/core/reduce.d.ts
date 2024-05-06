import { TypedArray } from '../types';
import { NDArray } from './';
/**
 * @static
 * @memberof vectorious
 * @function reduce
 * @description Equivalent to `TypedArray.prototype.reduce`.
 * @param {NDArray} x
 * @param {Function} f
 * @param {Number} initialValue
 * @returns {Number}
 * @example
 * import { reduce } from 'vectorious/core/reduce';
 *
 * reduce([1, 2, 3], (a, b) => a + b, 0); // => 6
 */
export declare const reduce: (x: NDArray, f: (acc: number, value: number, i: number, src: TypedArray) => number, initialValue?: number) => number;
export default function (this: NDArray, f: (acc: number, value: number, i: number, src: TypedArray) => number, initialValue?: number): number;
