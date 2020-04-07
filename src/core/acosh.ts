import { NDArray } from './';
import { NDIter } from '../iterator';

const { acosh: f } = Math;

/**
 * @static
 * @function acosh
 * @memberof NDArray
 * @description Returns the hyperbolic arccosine of each element of `x`.
 * @param {NDArray} x
 * @returns {NDArray}
 * @example
 * import { acosh } from 'vectorious/core/acosh';
 * 
 * acosh([1, 2, 3]); // => array([0, 1.316957950592041, 1.7627471685409546])
 */
export const acosh = (x: NDArray | ArrayLike<any>): NDArray => NDArray.array(x).acosh();

/**
 * @function acosh
 * @memberof NDArray.prototype
 * @description Returns the hyperbolic arccosine of each element of current array.
 * @param {NDArray} x
 * @returns {this}
 * @example
 * import { array } from 'vectorious/core/array';
 * 
 * array([1, 2, 3]).acosh(); // <=> array([0, 1.316957950592041, 1.7627471685409546])
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
