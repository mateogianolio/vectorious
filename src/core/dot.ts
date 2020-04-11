import { get_type } from '../util';

import { NDArray } from './';
import { array } from './array';

let nblas: any;
try {
  nblas = require('nblas');
} catch (err) {}

/**
 * @static
 * @function dot
 * @description
 * Performs dot multiplication with `x` and `y`.
 * Accelerated with BLAS `?dot`.
 * @param {NDArray} x
 * @param {NDArray} y
 * @returns {Number}
 * @example
 * import { dot } from 'vectorious/core/dot';
 * 
 * dot([1, 2, 3], [4, 5, 6]); // => 32
 */
export const dot = (x: NDArray | ArrayLike<any>, y: NDArray | ArrayLike<any>): number =>
  array(x).dot(array(y));

/**
 * @function dot
 * @memberof NDArray.prototype
 * @description
 * Performs dot multiplication with `x` and current array
 * Accelerated with BLAS `?dot`.
 * @param {NDArray} x
 * @returns {Number}
 * @example
 * import { array } from 'vectorious/core/array';
 * 
 * array([1, 2, 3]).dot([4, 5, 6]); // => 32
 */
export default function(this: NDArray, x: NDArray): number {
  this.equilateral(x);
  this.equidimensional(x);

  const { length: l1 } = this;
  let result: number = 0;

  try {
    if (!['float32', 'float64'].includes(this.dtype)) {
      this.dtype = 'float32';
      this.data = get_type(this.dtype).from(this.data);
    }

    const { data: d1 } = this;
    const { data: d2 } = x;
    if (this.dtype === 'float64') {
      result = nblas.ddot(l1, d2, 1, d1, 1);
    }

    if (this.dtype === 'float32') {
      result = nblas.sdot(l1, d2, 1, d1, 1);
    }
  } catch (err) {
    const { data: d1 } = this;
    const { data: d2 } = x;

    let i: number;
    for (i = 0; i < l1; i += 1) {
      result += d1[i] * d2[i];
    }
  }

  return result;
};
