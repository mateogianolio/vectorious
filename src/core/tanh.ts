import { NDArray } from './';
import { array } from './array';
import { NDIter } from '../iterator';

const { tanh: f } = Math;

/**
 * @static
 * @memberof module:Globals
 * @function tanh
 * @description Returns the hyperbolic tangent of each element of `x`.
 * @param {NDArray} x
 * @returns {NDArray}
 * @example
 * import { tanh } from 'vectorious/core/tanh';
 *
 * tanh([1, 2, 3]); // => array([0.7615941762924194, 0.9640275835990906, 0.9950547814369202])
 */
export const tanh = (x: NDArray | ArrayLike<any>): NDArray => array(x).tanh();

/**
 * @function tanh
 * @memberof NDArray.prototype
 * @description Returns the hyperbolic tangent of each element of current array.
 * @returns {this}
 * @example
 * import { array } from 'vectorious/core/array';
 *
 * array([1, 2, 3]).tanh(); // <=> array([0.7615941762924194, 0.9640275835990906, 0.9950547814369202])
 */
export default function (this: NDArray): NDArray {
  const { data: d1 } = this;
  const iter = new NDIter(this);

  for (const i of iter) {
    d1[i] = f(d1[i]);
  }

  return this;
}
