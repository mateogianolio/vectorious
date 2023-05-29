import { NDArray } from './';
import { array } from './array';
import { NDIter } from '../iterator';

const { asinh: f } = Math;

/**
 * @static
 * @memberof module:Globals
 * @function asinh
 * @description Returns the hyperbolic arcsine of each element of `x`.
 * @param {NDArray} x
 * @returns {NDArray}
 * @example
 * import { asinh } from 'vectorious/core/asinh';
 *
 * asinh([0, 1, 2]) // => array([0, 0.8813735842704773, 1.4436354637145996])
 */
export const asinh = (x: NDArray | ArrayLike<any>): NDArray => array(x).asinh();

/**
 * @function asinh
 * @memberof NDArray.prototype
 * @description Returns the hyperbolic arcsine of each element of current array.
 * @returns {this}
 * @example
 * import { array } from 'vectorious/core/array';
 *
 * array([0, 1, 2]).asinh() // <=> array([0, 0.8813735842704773, 1.4436354637145996])
 */
export default function (this: NDArray): NDArray {
  const { data: d1 } = this;
  const iter = new NDIter(this);

  for (const i of iter) {
    d1[i] = f(d1[i]);
  }

  return this;
}
