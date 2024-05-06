import { NDArray } from './';
import { array } from './array';
import { NDIter } from '../iterators';

const { acos: f } = Math;

/**
 * @static
 * @memberof vectorious
 * @function acos
 * @description Returns the arccosine of each element of `x`.
 * @param {NDArray} x
 * @returns {NDArray}
 * @example
 * import { acos } from 'vectorious/core/acos';
 *
 * acos([-1, 0, 1]); // => array([3.141592653589793, 1.5707963267948966, 0])
 */
export const acos = (x: NDArray | ArrayLike<any>): NDArray => array(x).acos();

export default function (this: NDArray): NDArray {
  const { data: d1 } = this;
  const iter = new NDIter(this);

  for (const i of iter) {
    d1[i] = f(d1[i]);
  }

  return this;
}
