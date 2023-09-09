import { NDArray } from './';
import { array } from './array';
import { NDIter } from '../iterators';

const { round: f } = Math;

/**
 * @static
 * @memberof vectorious
 * @function round
 * @description Returns the value of each element of `x` rounded to the nearest integer.
 * @param {NDArray} x
 * @returns {NDArray}
 * @example
 * import { round } from 'vectorious/core/round';
 *
 * round([1.2, 2.8, 3.5]); // => array([1, 3, 4])
 */
export const round = (x: NDArray | ArrayLike<any>): NDArray => array(x).round();

export default function (this: NDArray): NDArray {
  const { data: d1 } = this;
  const iter = new NDIter(this);

  for (const i of iter) {
    d1[i] = f(d1[i]);
  }

  return this;
}
