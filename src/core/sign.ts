import { NDArray } from './';
import { array } from './array';
import { NDIter } from '../iterators';

const { sign: f } = Math;

/**
 * @static
 * @memberof vectorious
 * @function sign
 * @description
 * Returns the sign of each element of `x`, indicating
 * whether it is positive, negative or zero.
 * @param {Number} x
 * @returns {NDArray}
 * @example
 * import { sign } from 'vectorious/core/sign';
 *
 * sign([1, 2, 3]); // => array([1, 1, 1])
 */
export const sign = (x: NDArray | ArrayLike<any>): NDArray => array(x).sign();

export default function (this: NDArray): NDArray {
  const { data: d1 } = this;
  const iter = new NDIter(this);

  for (const i of iter) {
    d1[i] = f(d1[i]);
  }

  return this;
}
