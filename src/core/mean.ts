import { NDArray } from './';
import { array } from './array';
import { NDIter } from '../iterators';

/**
 * @static
 * @memberof vectorious
 * @function mean
 * @description Gets the arithmetic mean of `x`.
 * @param {NDArray} x
 * @returns {Number}
 * @example
 * import { mean } from 'vectorious/core/mean';
 *
 * mean([1, 2, 3]); // => 2
 */
export const mean = (x: NDArray | ArrayLike<any>): number => array(x).mean();

export default function (this: NDArray): number {
  const { data: d1, length: l1 } = this;
  const iter = new NDIter(this);

  let mean: number = 0;
  for (const i of iter) {
    mean += d1[i];
  }

  return mean / l1;
}
