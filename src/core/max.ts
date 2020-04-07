import { get_type } from '../util';

import { NDArray } from './';
import { NDIter } from '../iterator';

let nblas: any;
try {
  nblas = require('nblas');
} catch (err) {}

/**
 * @static
 * @function max
 * @memberof NDArray
 * @description
 * Gets the maximum value (largest) element of `x`.
 * Accelerated with BLAS `i?amax`.
 * @param {NDArray} x
 * @returns {Number}
 * @example
 * import { max } from 'vectorious/core/max';
 * 
 * max([1, 2, 3]); // => 3
 */
export const max = (x: NDArray | ArrayLike<any>): number => NDArray.array(x).max();

/**
 * @function max
 * @memberof NDArray.prototype
 * @description
 * Gets the maximum value (smallest) element of current array.
 * Accelerated with BLAS `i?amax`.
 * @returns {Number}
 * @example
 * import { array } from 'vectorious/core/array';
 * 
 * array([1, 2, 3]).max(); // => 3
 */
export default function(this: NDArray): number {
  const { length: l1 } = this;
  let max: number = Number.NEGATIVE_INFINITY;

  try {
    if (!['float32', 'float64'].includes(this.dtype)) {
      this.dtype = 'float32';
      this.data = get_type(this.dtype).from(this.data);
    }

    const { data: d1 } = this;
    if (this.dtype === 'float64') {
      max = d1[nblas.idamax(l1, d1, 1)];
    }

    if (this.dtype === 'float32') {
      max = d1[nblas.isamax(l1, d1, 1)];
    }
  } catch (err) {
    const { data: d1 } = this;
    const iter = new NDIter(this);

    do {
      const value = d1[iter.pos];
      if (max < value) {
        max = value;
      }

      iter.next();
    } while (!iter.done());
  }

  return max;
};
