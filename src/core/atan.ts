import { NDArray } from './';
import { NDIter } from '../iterator';

const { atan: f } = Math;

/**
 * @static
 * @function atan
 * @memberof NDArray
 * @description Returns the arctangent of each element of `x`.
 * @param {NDArray} x
 * @returns {NDArray}
 * @example
 * import { atan } from 'vectorious/core/atan';
 * 
 * atan([1, 2, 3]); // => array([0.7853981852531433, 1.1071487665176392, 1.249045729637146])
 */
export const atan = (x: NDArray | ArrayLike<any>): NDArray => NDArray.array(x).atan();

/**
 * @function atan
 * @memberof NDArray.prototype
 * @description Returns the arctangent of each element of current array.
 * @returns {this}
 * @example
 * import { array } from 'vectorious/core/array';
 * 
 * array([1, 2, 3]).atan() // <=> array([0.7853981852531433, 1.1071487665176392, 1.249045729637146])
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
