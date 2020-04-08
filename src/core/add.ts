import { get_type } from '../util';

import { NDArray, array } from './';

let nblas: any;
try {
  nblas = require('nblas');
} catch (err) {}

/**
 * @static
 * @function add
 * @description Adds `y` multiplied by `alpha` to `x`. Accelerated with BLAS `?axpy`.
 * @param {NDArray} x
 * @param {NDArray} y
 * @returns {NDArray}
 * @example
 * import { add } from 'vectorious/core/add';
 * 
 * add([1, 2, 3], [4, 5, 6]); // => array([5, 7, 9])
 */
export const add = (x: NDArray | ArrayLike<any>, y: NDArray | ArrayLike<any>, alpha: number = 1): NDArray =>
  array(x).add(array(y), alpha);

/**
 * @function add
 * @memberof NDArray.prototype
 * @description Adds `x` multiplied by `alpha` to the current array. Accelerated with BLAS `?axpy`.
 * @param {NDArray} x
 * @returns {NDArray}
 * @example
 * import { array } from 'vectorious/core/array';
 * 
 * array([1, 2, 3]).add([4, 5, 6]); // <=> array([5, 7, 9])
 */
export default function (this: NDArray, x: NDArray | ArrayLike<any>, alpha: number = 1): NDArray {
  this.equilateral(array(x));
  this.equidimensional(array(x));

  const { length: l1 } = this;

  try {
    if (!['float32', 'float64'].includes(this.dtype)) {
      this.dtype = 'float32';
      this.data = get_type(this.dtype).from(this.data);
    }

    const { data: d1 } = this;
    const { data: d2 } = array(x);
    if (this.dtype === 'float64') {
      nblas.daxpy(l1, alpha, d2, 1, d1, 1);
    } else if (this.dtype === 'float32') {
      nblas.saxpy(l1, alpha, d2, 1, d1, 1);
    }
  } catch (err) {
    const { data: d1 } = this;
    const { data: d2 } = array(x);

    let i: number;
    for (i = 0; i < l1; i += 1) {
      d1[i] += alpha * d2[i];
    }
  }

  return this;
};
