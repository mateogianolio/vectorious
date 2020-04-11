import { get_type } from '../util';

import { NDArray } from './';
import { array } from './array';

let nblas: any;
try {
  nblas = require('nblas');
} catch (err) {}

const { sqrt: f } = Math;

/**
 * @static
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
  const { length: l1 } = this;
  let result: number = 0;

  try {
    if (!['float32', 'float64'].includes(this.dtype)) {
      this.dtype = 'float32';
      this.data = get_type(this.dtype).from(this.data);
    }

    const { data: d1 } = this;
    if (this.dtype === 'float64') {
      result = nblas.dnrm2(l1, d1, 1);
    }

    if (this.dtype === 'float32') {
      result = nblas.snrm2(l1, d1, 1);
    }
  } catch (err) {
    result = f(this.dot(this));
  }

  return result;
};
