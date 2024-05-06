import { NDArray } from './';
/**
 * @static
 * @memberof vectorious
 * @function check
 * @description Asserts if indices `i, j, ..., n` are within the bounds of `x`
 * @param {NDArray} x
 * @param {Number[]} ...indices
 * @throws {Error} index out of bounds
 * @example
 * import { check } from 'vectorious/core/check';
 *
 * check([0.5, 1.5, 2.5], 3); // Error: index out of bounds
 */
export declare const check: (x: NDArray | ArrayLike<any>, ...indices: number[]) => void;
export default function (this: NDArray, ...indices: number[]): void;
