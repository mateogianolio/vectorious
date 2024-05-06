import { NDArray } from './';
/**
 * @static
 * @memberof vectorious
 * @function square
 * @description Asserts if `x` is square.
 * @param {NDArray} x
 * @throws {Error} matrix is not square
 * @example
 * import { square } from 'vectorious/core/square';
 *
 * square([1, 2, 3]); // Error: matrix is not square
 */
export declare const square: (x: NDArray | ArrayLike<any>) => void;
export default function (this: NDArray): void;
