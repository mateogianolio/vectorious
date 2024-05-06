import { NDArray } from './';
/**
 * @static
 * @memberof vectorious
 * @function prod
 * @description Product of all elements of `x`.
 * @param {NDArray} x
 * @returns {Number}
 * @example
 * import { prod } from 'vectorious/core/prod';
 *
 * prod([1, 2, 3]); // => 6
 */
export declare const prod: (x: NDArray | ArrayLike<any>) => number;
export default function (this: NDArray): number;
