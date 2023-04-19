import { NDArray } from './';
import { array } from './array';
import { NDIter } from '../iterator';

const { log1p: f } = Math;

/**
 * @static
 * @memberof module:Globals
 * @function log1p
 * @description Returns the natural logarithm (log_e, also ln) of 1 + x for each element of `x`.
 * @param {NDArray} x
 * @returns {NDArray}
 * @example
 * import { log1p } from 'vectorious/core/log1p';
 *
 * log1p([1, 2, 3]); // => array([0.6931471824645996, 1.0986123085021973, 1.3862943649291992])
 */
export const log1p = (x: NDArray | ArrayLike<any>): NDArray => array(x).log1p();

/**
 * @function log1p
 * @memberof NDArray.prototype
 * @description Returns the natural logarithm (log_e, also ln) of 1 + x for each element of current array.
 * @returns {this}
 * @example
 * import { array } from 'vectorious/core/array';
 *
 * array([1, 2, 3]); // <=> array([0.6931471824645996, 1.0986123085021973, 1.3862943649291992])
 */
export default function (this: NDArray): NDArray {
  const { data: d1 } = this;
  const iter = new NDIter(this);

  for (const i of iter) {
    d1[i!] = f(d1[i!]);
  }

  return this;
}
