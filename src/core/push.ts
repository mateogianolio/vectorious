import { TypedArray } from '../types';
import { get_type } from '../util';

import { NDArray } from './';
import { array } from './array';

/**
 * @static
 * @memberof vectorious
 * @function push
 * @description Pushes a new `value` into `x`.
 * @param {NDArray} x
 * @param {Number} value
 * @returns {NDArray}
 * @example
 * import { push } from 'vectorious/core/push';
 *
 * push([1, 2, 3], 4); // => array([1, 2, 3, 4])
 */
export const push = (x: NDArray | ArrayLike<any>, value: number): NDArray => array(x).push(value);

export default function (this: NDArray, value: number): NDArray {
  if (this.shape.length !== 1) {
    throw new Error('push operation not permitted for multidimensional arrays');
  }

  const { data: d1, length: l1 } = this;
  const l2: number = l1 + 1;
  const d2: TypedArray = new (get_type(this.dtype))(l2);

  d2.set(d1);
  d2[l1] = value;

  this.data = d2;
  this.length = l2;
  this.shape = [l2];

  return this;
}
