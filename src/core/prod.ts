import { NDArray } from './';
import { NDIter } from '../iterator';

/**
 * @static
 * @function prod
 * @memberof NDArray
 * @description Product of all elements of `x`.
 * @param {NDArray} x
 * @returns {Number}
 * @example
 * import { prod } from 'vectorious/core/prod';
 * 
 * prod([1, 2, 3]); // => 6
 */
export const prod = (x: NDArray | ArrayLike<any>): number => NDArray.array(x).prod();

/**
 * @function prod
 * @memberof NDArray.prototype
 * @description Product of all elements of current array
 * @returns {Number}
 * @example
 * import { array } from 'vectorious/core/array';
 * 
 * array([1, 2, 3]).prod(); // => 6
 */
export default function(this: NDArray): number {
  const { data: d1 } = this;
  const iter = new NDIter(this);

  let prod: number = 1;
  do {
    prod *= d1[iter.pos];

    iter.next();
  } while (!iter.done());

  return prod;
};
