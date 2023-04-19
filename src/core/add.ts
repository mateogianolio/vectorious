import { NDArray } from './';
import { NDMultiIter } from '../iterator';
import { array } from './array';
import * as blas from '../blas';

/**
 * @static
 * @memberof module:Globals
 * @function add
 * @description
 * Adds `y` multiplied by `alpha` to `x`.
 * Accelerated with BLAS `?axpy`.
 * @param {NDArray} x
 * @param {NDArray} y
 * @param {Number} [1] alpha
 * @returns {NDArray}
 * @example
 * import { add } from 'vectorious/core/add';
 *
 * add([1, 2, 3], [4, 5, 6]); // => array([5, 7, 9])
 */
export const add = (
  x: NDArray | ArrayLike<any>,
  y: NDArray | ArrayLike<any>,
  alpha: number = 1
): NDArray => array(x).add(array(y), alpha);

/**
 * @function add
 * @memberof NDArray.prototype
 * @description
 * Adds `x` multiplied by `alpha` to the current array.
 * Accelerated with BLAS `?axpy`.
 * @param {NDArray} x
 * @param {Number} [1] alpha
 * @returns {NDArray}
 * @example
 * import { array } from 'vectorious/core/array';
 *
 * array([1, 2, 3]).add([4, 5, 6]); // <=> array([5, 7, 9])
 */
export default function (this: NDArray, x: NDArray | ArrayLike<any>, alpha: number = 1): NDArray {
  const { data: d1, length: l1, strides: st1, dtype } = this;
  const { data: d2, strides: st2 } = array(x);

  try {
    const inc_x = st2[st2.length - 1];
    const inc_y = st1[st1.length - 1];

    if (inc_x !== inc_y) {
      throw new Error('inc_x and inc_y must be equal');
    }

    blas.axpy(dtype, l1, alpha, d2, inc_x, d1, inc_y);
  } catch (err) {
    const iter = new NDMultiIter(this, x);

    for (const [i, j] of iter) {
      d1[i] += alpha * d2[j];
    }
  }

  return this;
}
