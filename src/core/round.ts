import { NDArray, array } from './';
import { NDIter } from '../iterator';

const { round: f } = Math;

/**
 * @static
 * @function round
 * @description Returns the value of each element of `x` rounded to the nearest integer.
 * @param {NDArray} x
 * @returns {NDArray}
 * @example
 * import { round } from 'vectorious/core/round';
 * 
 * round([1.2, 2.8, 3.5]); // => array([1, 3, 4])
 */
export const round = (x: NDArray | ArrayLike<any>): NDArray => array(x).round();

/**
 * @function round
 * @memberof NDArray.prototype
 * @description Returns the value of each element of current array rounded to the nearest integer.
 * @returns {this}
 * @example
 * import { array } from 'vectorious/core/array';
 * 
 * array([1.2, 2.8, 3.5]).round(); // <=> array([1, 3, 4])
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
