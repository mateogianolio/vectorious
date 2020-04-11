import { NDArray } from './';
import { array } from './array';
import { NDIter } from '../iterator';

const { log2: f } = Math;

/**
 * @static
 * @function log2
 * @description Returns the base 2 logarithm of each element of `x`.
 * @param {NDArray} x
 * @returns {NDArray}
 * @example
 * import { log2 } from 'vectorious/core/log2';
 * 
 * log2([1, 2, 4]); // => array([0, 1, 2])
 */
export const log2 = (x: NDArray | ArrayLike<any>): NDArray => array(x).log2();

/**
 * @function log2
 * @memberof NDArray.prototype
 * @description Returns the base 2 logarithm of each element of current array.
 * @returns {this}
 * @example
 * import { array } from 'vectorious/core/array';
 * 
 * array([1, 2, 4]).log2(); // => array([0, 1, 2])
 */
export default function(this: NDArray): NDArray {
  const { data: d1 } = this;
  const iter = new NDIter(this);

  do {
    d1[iter.pos] = f(d1[iter.pos]);

    iter.next();
  } while (!iter.done());

  return this;
};
