import { NDArray } from './';
/**
 * @static
 * @memberof vectorious
 * @function pow
 * @description Returns each element of `x` to the exponent power, that is, element^exponent.
 * @param {NDArray} x
 * @param {Number} exponent
 * @returns {NDArray}
 * @example
 * import { pow } from 'vectorious/core/pow';
 *
 * pow([1, 2, 3], 2); // => array([1, 4, 9])
 */
export declare const pow: (x: NDArray | ArrayLike<any>, exponent: number) => NDArray;
export default function (this: NDArray, exponent: number): NDArray;
