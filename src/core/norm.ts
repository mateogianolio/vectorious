import { NDArray } from './';
import { array } from './array';
import * as blas from '../blas';

const { sqrt: f } = Math;

/**
 * @static
 * @memberof module:Globals
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
export const norm = (x: NDArray | ArrayLike<any>): number => array(x).norm();

/**
 * @function norm
 * @memberof NDArray.prototype
 * @description
 * Calculates the norm of current array (also called L2 norm or Euclidean length).
 * Accelerated with BLAS `?nrm2`.
 * @returns {Number}
 * @example
 * import { array } from 'vectorious/core/array';
 * 
 * array([1, 2, 3]).norm(); // => 3.7416574954986572
 */
export default function(this: NDArray): number {
  const { data: d1, length: l1, strides: st1, dtype } = this;
  let result: number = 0;

  try {
    const inc_x = st1[st1.length - 1];

    result = blas.nrm2(dtype, l1, d1, inc_x);
  } catch (err) {
    result = f(this.dot(this));
  }

  return result;
};
