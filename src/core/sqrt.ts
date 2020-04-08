import { NDArray, array } from './';
import { NDIter } from '../iterator';

const { sqrt: f } = Math;

/**
 * @static
 * @function sqrt
 * @description Returns the positive square root of each element of `x`.
 * @param {NDArray} x
 * @returns {NDArray}
 * @example
 * import { sqrt } from 'vectorious/core/sqrt';
 * 
 * sqrt([1, 4, 9]); // => array([1, 2, 3])
 */
export const sqrt = (x: NDArray | ArrayLike<any>): NDArray => array(x).sqrt();

/**
 * @function sqrt
 * @memberof NDArray.prototype
 * @description Returns the positive square root of each element of current array.
 * @returns {this}
 * @example
 * import { array } from 'vectorious/core/array';
 * 
 * array([1, 4, 9]); // <=> array([1, 2, 3])
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
