import { NDArray } from './';
import { array } from './array';
import { NDIter } from '../iterators';

const { cosh: f } = Math;

/**
 * @static
 * @memberof vectorious
 * @function cosh
 * @description Returns the hyperbolic cosine of each element of `x`.
 * @param {NDArray} x
 * @returns {NDArray}
 * @example
 * import { cosh } from 'vectorious/core/cosh';
 *
 * cosh([0, 1, 2]); // => array([1, 1.5430806875228882, 3.762195587158203])
 */
export const cosh = (x: NDArray | ArrayLike<any>): NDArray => array(x).cosh();

export default function (this: NDArray): NDArray {
  const { data: d1 } = this;
  const iter = new NDIter(this);

  for (const i of iter) {
    d1[i] = f(d1[i]);
  }

  return this;
}
