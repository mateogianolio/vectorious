import { NDArray } from './';
import { array } from './array';
import { NDIter } from '../iterator';

const { sign: f } = Math;

/**
 * @static
 * @memberof module:Globals
 * @function sign
 * @description
 * Returns the sign of each element of `x`, indicating
 * whether it is positive, negative or zero.
 * @param {Number} x
 * @returns {NDArray}
 * @example
 * import { sign } from 'vectorious/core/sign';
 * 
 * sign([1, 2, 3]); // => array([1, 1, 1])
 */
export const sign = (x: NDArray | ArrayLike<any>): NDArray => array(x).sign();

/**
 * @function sign
 * @memberof NDArray.prototype
 * @description
 * Returns the sign of each element of current array, indicating
 * whether it is positive, negative or zero.
 * @returns {this}
 * @example
 * import { array } from 'vectorious/core/array';
 * 
 * array([1, 2, 3]).sign(); // <=> array([1, 1, 1])
 */
export default function(this: NDArray): NDArray {
  const { data: d1 } = this;
  const iter = new NDIter(this);

  for (const i of iter) {
    d1[i!] = f(d1[i!]);
  }

  return this;
};
