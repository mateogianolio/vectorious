import { NDArray } from './';
/**
 * @deprecated
 * @static
 * @memberof vectorious
 * @function equilateral
 * @description Asserts if `x` and `y` have the same length
 * @param {NDArray} x
 * @param {NDArray} y
 * @throws {Error} lengths x and y do not match
 * @example
 * import { equilateral } from 'vectorious/core/equilateral';
 *
 * equilateral([1, 2, 3], [1, 2]); // Error: lengths 3 and 2 do not match
 */
export declare const equilateral: (x: NDArray | ArrayLike<any>, y: NDArray | ArrayLike<any>) => void;
export default function (this: NDArray, x: NDArray): void;
