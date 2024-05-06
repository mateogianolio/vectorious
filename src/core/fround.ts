import { NDArray } from './';
import { array } from './array';
import { NDIter } from '../iterators';

const { fround: f } = Math;

/**
 * @static
 * @memberof vectorious
 * @function fround
 * @description Returns the nearest single precision float representation of each element of `x`.
 * @param {NDArray} x
 * @returns {NDArray}
 * @example
 * import { fround } from 'vectorious/core/fround';
 *
 * fround([-5.05, 5.05]); // => array([-5.050000190734863, 5.050000190734863])
 */
export const fround = (x: NDArray | ArrayLike<any>): NDArray => array(x).fround();

export default function (this: NDArray): NDArray {
  const { data: d1 } = this;
  const iter = new NDIter(this);

  for (const i of iter) {
    d1[i] = f(d1[i]);
  }

  return this;
}
