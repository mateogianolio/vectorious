import { NDArray } from './';
import { NDIter } from '../iterator';

const { sin: f } = Math;

/**
 * @static
 * @function sin
 * @memberof NDArray
 * @description Returns the sine of each element of `x`.
 * @param {NDArray} x
 * @returns {NDArray}
 * @example
 * import { sin } from 'vectorious/core/sin';
 * 
 * sin([0, Math.PI / 2, Math.PI]); // => array([0, 1, 0])
 */
export const sin = (x: NDArray | ArrayLike<any>): NDArray => NDArray.array(x).sin();

/**
 * @function sin
 * @memberof NDArray.prototype
 * @description Returns the sine of each element of current array.
 * @returns {this}
 * @example
 * import { array } from 'vectorious/core/array';
 * 
 * array([0, Math.PI / 2, Math.PI]).sin(); // <=> array([0, 1, 0])
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
