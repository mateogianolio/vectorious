import { NDArray } from './';
import { array } from './array';
import { NDIter } from '../iterators';

const { sqrt: f } = Math;

/**
 * @static
 * @memberof vectorious
 * @function sqrt
 * @description Returns the positive square root of each element of `x`.
 * @param {NDArray} x
 * @returns {NDArray}
 * @example
 * import { sqrt } from 'vectorious/core/sqrt';
 *
 * sqrt([1, 4, 9]); // => array([1, 2, 3])
 */
export const sqrt = (x: NDArray | ArrayLike<any>): NDArray => array(x).sqrt();

export default function (this: NDArray): NDArray {
  const { data: d1 } = this;
  const iter = new NDIter(this);

  for (const i of iter) {
    d1[i] = f(d1[i]);
  }

  return this;
}
