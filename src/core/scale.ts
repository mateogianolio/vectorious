import { NDArray } from './';
import { array } from './array';
import { NDIter } from '../iterators';
import * as blas from '../blas';

/**
 * @static
 * @memberof vectorious
 * @function scale
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
  array(x).scale(scalar);

export default function (this: NDArray, scalar: number): NDArray {
  const { data: d1, length: l1, strides: st1, dtype } = this;

  try {
    const inc_x = st1[st1.length - 1];

    blas.scal(dtype, l1, scalar, d1, inc_x);
  } catch (err) {
    const iter = new NDIter(this);

    for (const i of iter) {
      d1[i] *= scalar;
    }
  }

  return this;
}
