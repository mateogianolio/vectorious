import { NDArray } from './';
import { array } from './array';
import { NDIter } from '../iterators';

const { exp: f } = Math;

/**
 * @static
 * @memberof vectorious
 * @function exp
 * @description
 * Returns e^x of each element of `x`, where x is the argument,
 * and e is Euler's constant (2.718…), the base of the natural logarithm.
 * @param {NDArray} x
 * @returns {NDArray}
 * @example
 * import { exp } from 'vectorious/core/exp';
 *
 * exp([1, 2, 3]); // => array([2.7182817459106445, 7.389056205749512, 20.08553695678711])
 */
export const exp = (x: NDArray | ArrayLike<any>): NDArray => array(x).exp();

export default function (this: NDArray): NDArray {
  const { data: d1 } = this;
  const iter = new NDIter(this);

  for (const i of iter) {
    d1[i] = f(d1[i]);
  }

  return this;
}
