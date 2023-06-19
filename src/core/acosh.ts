import { NDArray } from './';
import { array } from './array';
import { NDIter } from '../iterators';

const { acosh: f } = Math;

/**
 * @static
 * @memberof vectorious
 * @function acosh
 * @description Returns the hyperbolic arccosine of each element of `x`.
 * @param {NDArray} x
 * @returns {NDArray}
 * @example
 * import { acosh } from 'vectorious/core/acosh';
 *
 * acosh([1, 2, 3]); // => array([0, 1.316957950592041, 1.7627471685409546])
 */
export const acosh = (x: NDArray | ArrayLike<any>): NDArray => array(x).acosh();

export default function (this: NDArray): NDArray {
  const { data: d1 } = this;
  const iter = new NDIter(this);

  for (const i of iter) {
    d1[i] = f(d1[i]);
  }

  return this;
}
