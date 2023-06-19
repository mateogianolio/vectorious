import { NDArray } from './';
/**
 * @static
 * @memberof vectorious
 * @function equals
 * @description Checks if `x` and `y` are equal.
 * @param {NDArray} x
 * @param {NDArray} y
 * @param {Number} tolerance
 * @returns {Boolean}
 * @example
 * import { equals } from 'vectorious/core/equals';
 *
 * equals([1, 2, 3], [1, 2, 3]); // => true
 */
export declare const equals: (x: NDArray | ArrayLike<any>, y: NDArray | ArrayLike<any>, tolerance?: number) => boolean;
/**
 * @function equals
 * @memberof NDArray
 * @instance
 * @description Checks if current array and `x` are equal.
 * @param {NDArray} x
 * @param {Number} tolerance
 * @returns {Boolean}
 * @example
 * import { equals } from 'vectorious/core/equals';
 *
 * array([1, 2, 3]).equals([1, 2, 3]); // => true
 */
export default function (this: NDArray, x: NDArray, tolerance?: number): boolean;
