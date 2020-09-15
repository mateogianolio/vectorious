import { NDArray } from './';
import { array } from './array';
import { NDIter } from '../iterator';

/**
 * @static
 * @memberof module:Globals
 * @function sum
 * @description Sum of `x`
 * @param {NDArray} x
 * @returns {Number}
 * @example
 * import { sum } from 'vectorious/core/sum';
 * 
 * sum([1, 2, 3]); // => 6
 */
export const sum = (x: NDArray | ArrayLike<any>): number => array(x).sum();

/**
 * @function sum
 * @memberof NDArray.prototype
 * @description Sum of array elements
 * @returns {Number}
 * @example
 * import { array } from 'vectorious/core/array';
 * 
 * array([1, 2, 3]).sum(); // => 6
 */
export default function(this: NDArray): number {
  const { data: d1 } = this;
  const iter = new NDIter(this);

  let sum: number = 0;
  for (const i of iter) {
    sum += d1[i!];
  }

  return sum;
};
