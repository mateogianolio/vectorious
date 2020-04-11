import { NDArray } from './';
import { array } from './array';
import { NDIter } from '../iterator';

const { cbrt: f } = Math;

/**
 * @static
 * @function cbrt
 * @description Returns the cube root of each element of `x`.
 * @param {NDArray} x
 * @returns {NDArray}
 * @example
 * import { cbrt } from 'vectorious/core/cbrt';
 * 
 * cbrt([1, 8, 27]); // => array([1, 2, 3])
 */
export const cbrt = (x: NDArray | ArrayLike<any>): NDArray => array(x).cbrt();

/**
 * @function cbrt
 * @memberof NDArray.prototype
 * @description Returns the cube root of each element of current array.
 * @returns {this}
 * @example
 * import { cbrt } from 'vectorious/core/cbrt';
 * 
 * cbrt([1, 8, 27]); // => array([1, 2, 3])
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
