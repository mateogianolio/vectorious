import { NDArray } from './';
/**
 * @static
 * @memberof vectorious
 * @function log1p
 * @description Returns the natural logarithm (log_e, also ln) of 1 + x for each element of `x`.
 * @param {NDArray} x
 * @returns {NDArray}
 * @example
 * import { log1p } from 'vectorious/core/log1p';
 *
 * log1p([1, 2, 3]); // => array([0.6931471824645996, 1.0986123085021973, 1.3862943649291992])
 */
export declare const log1p: (x: NDArray | ArrayLike<any>) => NDArray;
export default function (this: NDArray): NDArray;
