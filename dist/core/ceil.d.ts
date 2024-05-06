import { NDArray } from './';
/**
 * @static
 * @memberof vectorious
 * @function ceil
 * @description Returns smallest integer greater than or equal to of each element of `x`.
 * @param {NDArray} x
 * @returns {NDArray}
 * @example
 * import { ceil } from 'vectorious/core/ceil';
 *
 * ceil([0.5, 1.5, 2.5]); // => array([1, 2, 3])
 */
export declare const ceil: (x: NDArray | ArrayLike<any>) => NDArray;
export default function (this: NDArray): NDArray;
