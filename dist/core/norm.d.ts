import { NDArray } from './';
/**
 * @static
 * @memberof vectorious
 * @function norm
 * @description
 * Calculates the norm of current array (also called L2 norm or Euclidean length).
 * Accelerated with BLAS `?nrm2`.
 * @param {NDArray} x
 * @returns {Number}
 * @example
 * import { norm } from 'vectorious/core/norm';
 *
 * norm([1, 2, 3]); // => 3.7416574954986572
 */
export declare const norm: (x: NDArray | ArrayLike<any>) => number;
export default function (this: NDArray): number;
