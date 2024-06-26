import { NDArray } from './';
import { array } from './array';
import { NDIter } from '../iterators';

const { atanh: f } = Math;

/**
 * @static
 * @memberof vectorious
 * @function atanh
 * @description Returns the hyperbolic arctangent of each element of `x`.
 * @param {NDArray} x
 * @returns {NDArray}
 * @example
 * import { atanh } from 'vectorious/core/atanh';
 *
 * atanh([0, -0.5]); // => array([0, -0.5493061542510986])
 */
export const atanh = (x: NDArray | ArrayLike<any>): NDArray => array(x).atanh();

export default function (this: NDArray): NDArray {
  const { data: d1 } = this;
  const iter = new NDIter(this);

  for (const i of iter) {
    d1[i] = f(d1[i]);
  }

  return this;
}
