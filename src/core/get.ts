import { NDArray } from './';
import { array } from './array';

/**
 * @static
 * @memberof module:Globals
 * @function get
 * @description Gets the element at `i, j, ..., n` from `x`
 * @param {NDArray} x
 * @param {Number[]} ...indices
 * @returns {Number}
 * @example
 * import { get } from 'vectorious/core/get';
 *
 * get([1, 2, 3], 2); // 3
 */
export const get = (x: NDArray | ArrayLike<any>, ...indices: number[]): number =>
  array(x).get(...indices);

/**
 * @function get
 * @memberof NDArray.prototype
 * @description Gets the element at `i, j, ..., n` from current vector.
 * @param {Number[]} ...indices
 * @returns {Number}
 * @example
 * import { array } from 'vectorious/core/array';
 *
 * array([1, 2, 3]).get(2); // 3
 */
export default function (this: NDArray, ...indices: number[]): number {
  this.check(...indices);

  const { data: d1, shape: s1 } = this;
  const { length: ndim } = s1;
  let index = 0;

  let i: number;
  for (i = 0; i < ndim; i += 1) {
    index *= s1[i];
    index += indices[i];
  }

  return d1[index];
}
