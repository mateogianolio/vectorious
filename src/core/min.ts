import { NDArray } from './';
import { array } from './array';
import { NDIter } from '../iterator';

/**
 * @static
 * @memberof module:Globals
 * @function min
 * @description Gets the minimum value (smallest) element of `x`.
 * @param {NDArray} x
 * @returns {Number}
 * @example
 * import { min } from 'vectorious/core/min';
 * 
 * min([1, 2, 3]); // => 1
 */
export const min = (x: NDArray | ArrayLike<any>): number => array(x).min();

/**
 * @function min
 * @memberof NDArray.prototype
 * @description Gets the minimum value (smallest) element of current array.
 * @returns {Number}
 * @example
 * import { array } from 'vectorious/core/array';
 * 
 * array([1, 2, 3]).min(); // 1
 */
export default function(this: NDArray): number {
  const { data: d1 } = this;

  const iter = new NDIter(this);

  let min: number = Number.POSITIVE_INFINITY;
  for (const i of iter) {
    const value = d1[i!];
    if (min > value) {
      min = value;
    }
  }

  return min;
};
