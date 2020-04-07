import { NDArray } from './';
import { NDIter } from '../iterator';

const { trunc: f } = Math;

/**
 * @static
 * @function trunc
 * @memberof NDArray
 * @description
 * Returns the integer part of each element of `x`,
 * removing any fractional digits.
 * @param {NDArray} x
 * @returns {NDArray}
 * @example
 * import { trunc } from 'vectorious/core/trunc';
 * 
 * trunc([1.2, 2.8, 3.5]); // => array([1, 2, 3])
 */
export const trunc = (x: NDArray | ArrayLike<any>): NDArray => NDArray.array(x).trunc();

/**
 * @function trunc
 * @memberof NDArray.prototype
 * @description
 * Returns the integer part of each element of current array,
 * removing any fractional digits.
 * @returns {this}
 * @example
 * import { array } from 'vectorious/core/array';
 * 
 * array([1.2, 2.8, 3.5]).trunc(); // => array([1, 2, 3])
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
