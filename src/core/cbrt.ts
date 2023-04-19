import { NDArray } from './';
import { array } from './array';
import { NDIter } from '../iterator';

const { cbrt: f } = Math;

/**
 * @static
 * @memberof module:Globals
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
export default function (this: NDArray): NDArray {
  const { data: d1 } = this;
  const iter = new NDIter(this);

  for (const i of iter) {
    d1[i!] = f(d1[i!]);
  }

  return this;
}
