import { NDArray } from './';
import { array } from './array';
import { NDIter } from '../iterators';

/**
 * @static
 * @memberof vectorious
 * @function reciprocal
 * @description Gets the element-wise reciprocal of `x`.
 * @param {NDArray} x
 * @returns {NDArray}
 * @example
 * import { reciprocal } from 'vectorious/core/reciprocal';
 *
 * reciprocal([1, 2, 3]); // => array([1, 0.5, 0.3333333432674408])
 */
export const reciprocal = (x: NDArray | ArrayLike<any>): NDArray => array(x).reciprocal();

export default function (this: NDArray): NDArray {
  const { data: d1 } = this;
  const iter = new NDIter(this);

  for (const i of iter) {
    d1[i] = 1 / d1[i];
  }

  return this;
}
