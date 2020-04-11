import { NDArray } from './';
import { array } from './array';
import { NDIter } from '../iterator';

const { floor: f } = Math;

/**
 * @static
 * @function floor
 * @description Returns the largest integer less than or equal to a number of each element of `x`.
 * @param {NDArray} x
 * @returns {NDArray}
 * @example
 * import { floor } from 'vectorious/core/floor';
 * 
 * floor([1.5, 2.5, 3.5]); // => array([1, 2, 3])
 */
export const floor = (x: NDArray | ArrayLike<any>): NDArray => array(x).floor();

/**
 * @function floor
 * @memberof NDArray.prototype
 * @description Returns the largest integer less than or equal to a number of each element of current array.
 * @returns {this}
 * @example
 * import { array } from 'vectorious/core/array';
 * 
 * array([1.5, 2.5, 3.5]).floor(); // <=> array([1, 2, 3])
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
