import { NDArray } from './';
import { array } from './array';
import { NDIter } from '../iterators';

const { atan: f } = Math;

/**
 * @static
 * @memberof vectorious
 * @function atan
 * @description Returns the arctangent of each element of `x`.
 * @param {NDArray} x
 * @returns {NDArray}
 * @example
 * import { atan } from 'vectorious/core/atan';
 *
 * atan([1, 2, 3]); // => array([0.7853981852531433, 1.1071487665176392, 1.249045729637146])
 */
export const atan = (x: NDArray | ArrayLike<any>): NDArray => array(x).atan();

export default function (this: NDArray): NDArray {
  const { data: d1 } = this;
  const iter = new NDIter(this);

  for (const i of iter) {
    d1[i] = f(d1[i]);
  }

  return this;
}
