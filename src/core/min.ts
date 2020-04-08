import { NDArray, array } from './';
import { NDIter } from '../iterator';

/**
 * @static
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
  do {
    const value = d1[iter.pos];
    if (min > value) {
      min = value;
    }

    iter.next();
  } while (!iter.done());

  return min;
};
