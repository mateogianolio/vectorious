import { NDArray } from './';
import { NDIter } from '../iterator';

/**
 * @static
 * @function reciprocal
 * @memberof NDArray
 * @description Gets the element-wise reciprocal of `x`.
 * @param {NDArray} x
 * @returns {NDArray}
 * @example
 * import { reciprocal } from 'vectorious/core/reciprocal';
 * 
 * reciprocal([1, 2, 3]); // => array([1, 0.5, 0.3333333432674408])
 */
export const reciprocal = (x: NDArray | ArrayLike<any>): NDArray =>
  NDArray.array(x).reciprocal();

/**
 * @function reciprocal
 * @memberof NDArray.prototype
 * @description Gets the element-wise reciprocal of current array.
 * @returns {this}
 * @example
 * import { array } from 'vectorious/core/array';
 * 
 * array([1, 2, 3]); // => array([1, 0.5, 0.3333333432674408])
 */
export default function(this: NDArray): NDArray {
  const { data: d1 } = this;
  const iter = new NDIter(this);

  do {
    d1[iter.pos] = 1 / d1[iter.pos];

    iter.next();
  } while (!iter.done());

  return this;
};
