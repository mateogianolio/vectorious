import { NDArray } from './';
import { NDIter } from '../iterator';

const { fround: f } = Math;

/**
 * @static
 * @function fround
 * @memberof NDArray
 * @description Returns the nearest single precision float representation of each element of `x`.
 * @param {NDArray} x
 * @returns {NDArray}
 * @example
 * import { fround } from 'vectorious/core/fround';
 * 
 * fround([-5.05, 5.05]); // => array([-5.050000190734863, 5.050000190734863])
 */
export const fround = (x: NDArray | ArrayLike<any>): NDArray => NDArray.array(x).fround();

/**
 * @function fround
 * @memberof NDArray.prototype
 * @description Returns the nearest single precision float representation of each element of current array.
 * @returns {this}
 * @example
 * import { array } from 'vectorious/core/array';
 * 
 * array([-5.05, 5.05]).fround(); // <=> array([-5.050000190734863, 5.050000190734863])
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
