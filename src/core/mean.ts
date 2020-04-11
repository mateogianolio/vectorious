import { NDArray } from './';
import { array } from './array';
import { NDIter } from '../iterator';

/**
 * @static
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

/**
 * @function mean
 * @memberof NDArray.prototype
 * @description Gets the arithmetic mean of current array.
 * @returns {Number}
 * @example
 * import { array } from 'vectorious/core/array';
 * 
 * array([1, 2, 3]).mean(); // => 2
 */
export default function(this: NDArray): number {
  const { data: d1, length: l1 } = this;
  const iter = new NDIter(this);

  let mean: number = 0;
  do {
    mean += d1[iter.pos];

    iter.next();
  } while (!iter.done());

  return mean / l1;
};
