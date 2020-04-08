import { NDArray, array } from './';
import { NDIter } from '../iterator';

const { cosh: f } = Math;

/**
 * @static
 * @function cosh
 * @description Returns the hyperbolic cosine of each element of `x`.
 * @param {NDArray} x
 * @returns {NDArray}
 * @example
 * import { cosh } from 'vectorious/core/cosh';
 * 
 * cosh([0, 1, 2]); // => array([1, 1.5430806875228882, 3.762195587158203])
 */
export const cosh = (x: NDArray | ArrayLike<any>): NDArray => array(x).cosh();

/**
 * @function cosh
 * @description Returns the hyperbolic cosine of each element of current array.
 * @returns {this}
 * @example
 * import { array } from 'vectorious/core/array';
 * 
 * array([0, 1, 2]).cosh(); // => array([1, 1.5430806875228882, 3.762195587158203])
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
