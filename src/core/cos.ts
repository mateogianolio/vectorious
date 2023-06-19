import { NDArray } from './';
import { array } from './array';
import { NDIter } from '../iterators';

const { cos: f } = Math;

/**
 * @static
 * @memberof vectorious
 * @function cos
 * @description Returns the cosine of each element of `x`.
 * @param {NDArray} x
 * @returns {NDArray}
 * @example
 * import { cos } from 'vectorious/core/cos';
 *
 * cos([0, Math.PI / 2, Math.PI]); // => array([1, 0, -1])
 */
export const cos = (x: NDArray | ArrayLike<any>): NDArray => array(x).cos();

export default function (this: NDArray): NDArray {
  const { data: d1 } = this;
  const iter = new NDIter(this);

  for (const i of iter) {
    d1[i] = f(d1[i]);
  }

  return this;
}
