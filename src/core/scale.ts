import { get_type } from '../util';

import { NDArray } from './';
import { NDIter } from '../iterator';

let nblas: any;
try {
  nblas = require('nblas');
} catch (err) {}

/**
 * @static
 * @function scale
 * @memberof NDArray
 * @description
 * Multiplies all elements of `x` with a specified `scalar`.
 * Accelerated with BLAS `?scal`.
 * @param {NDArray} x
 * @param {Number} scalar
 * @returns {NDArray}
 * @example
 * import { scale } from 'vectorious/core/scale';
 * 
 * scale([1, 2, 3], 2); // => array([2, 4, 6])
 */
export const scale = (x: NDArray | ArrayLike<any>, scalar: number): NDArray =>
  NDArray.array(x).scale(scalar);

/**
 * @function scale
 * @memberof NDArray.prototype
 * @description
 * Multiplies all elements of current array with a specified `scalar`.
 * Accelerated with BLAS `?scal`.
 * @param {Number} scalar
 * @returns {this}
 * @example
 * import { array } from 'vectorious/core/array';
 * 
 * array([1, 2, 3]).scale(2); // <=> array([2, 4, 6])
 */
export default function(this: NDArray, scalar: number): NDArray {
  const { length: l1 } = this;

  try {
    if (!['float32', 'float64'].includes(this.dtype)) {
      this.dtype = 'float32';
      this.data = get_type(this.dtype).from(this.data);
    }

    const { data: d1 } = this;
    if (this.dtype === 'float64') {
      nblas.dscal(l1, scalar, d1, 1);
    } else if (this.dtype === 'float32') {
      nblas.sscal(l1, scalar, d1, 1);
    }
  } catch (err) {
    const { data: d1 } = this;
    const iter = new NDIter(this);

    do {
      d1[iter.pos] *= scalar;

      iter.next();
    } while (!iter.done());
  }

  return this;
};
