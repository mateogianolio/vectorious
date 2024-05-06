import { NDArray } from './';
import { array } from './array';
import { NDIter } from '../iterators';

/**
 * @static
 * @memberof vectorious
 * @function prod
 * @description Product of all elements of `x`.
 * @param {NDArray} x
 * @returns {Number}
 * @example
 * import { prod } from 'vectorious/core/prod';
 *
 * prod([1, 2, 3]); // => 6
 */
export const prod = (x: NDArray | ArrayLike<any>): number => array(x).prod();

export default function (this: NDArray): number {
  const { data: d1 } = this;
  const iter = new NDIter(this);

  let prod: number = 1;
  for (const i of iter) {
    prod *= d1[i];
  }

  return prod;
}
