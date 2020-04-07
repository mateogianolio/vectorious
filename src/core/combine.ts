import { TypedArray } from '../types';
import { get_type } from '../util';

import { NDArray } from './';

/**
 * @static
 * @function combine
 * @memberof NDArray
 * @description Combines the vector `x` with `y`
 * @param {NDArray} x
 * @param {NDArray} y
 * @returns {NDArray}
 * @example
 * import { combine } from 'vectorious/core/combine';
 * 
 * combine([1, 2, 3], [4, 5, 6]); // => array([1, 2, 3, 4, 5, 6])
 */
export const combine = (x: NDArray | ArrayLike<any>, y: NDArray | ArrayLike<any>): NDArray =>
  NDArray.array(x).combine(NDArray.array(y));

/**
 * @function combine
 * @memberof NDArray.prototype
 * @description Combines the current vector with `x`
 * @param {NDArray} x
 * @returns {this}
 * @example
 * import { array } from 'vectorious/core/array';
 * 
 * array([1, 2, 3]).combine([4, 5, 6]); // => array([1, 2, 3, 4, 5, 6])
 */
export default function(this: NDArray, x: NDArray): NDArray {
  if (this.shape.length !== 1 && x.shape.length !== 1) {
    throw new Error('combine operation not permitted for multidimensional arrays');
  }

  const { length: l1, data: d1 } = this;
  const { length: l2, data: d2 } = x;

  if (l2 === 0) {
    return this;
  }

  if (l1 === 0) {
    this.data = new (get_type(x.dtype))(d2);
    this.length = l2;
    this.dtype = x.dtype;

    return this;
  }

  const l3: number = l1 + l2;
  const d3: TypedArray = new (get_type(this.dtype))(l3);

  d3.set(d1);
  d3.set(d2, l1);

  this.data = d3;
  this.length = l3;
  this.shape = [l3];

  return this;
};
