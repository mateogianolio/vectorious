import { TypedArray } from '../types';
import { get_type } from '../util';

import { NDArray } from './';
import { array } from './array';

/**
 * @static
 * @function slice
 * @description Slices `x` in the corresponding dimension
 * @param {NDArray} x
 * @param {Number} begin
 * @param {Number} end
 * @param {Number} step
 * @returns {NDArray}
 * @example
 * import { slice } from 'vectorious/core/slice';
 * 
 * slice([1, 2, 3, 4], 0, 4, 2); // => array([1, 3])
 */
export const slice = (
  x: NDArray | ArrayLike<any>,
  begin?: number,
  end?: number,
  step?: number
): NDArray =>
  array(x).slice(begin, end, step);

/**
 * @function slice
 * @memberof NDArray.prototype
 * @description Slices the current array in the corresponding dimension
 * @param {Number} begin
 * @param {Number} end
 * @param {Number} step
 * @returns {this}
 * @example
 * import { array } from 'vectorious/core/array';
 * 
 * array([1, 2, 3, 4]).slice(0, 4, 2); // => array([1, 3])
 */
export default function(
  this: NDArray,
  begin: number = 0,
  end: number = this.shape[0],
  step: number = 1
): NDArray {
  const { data: d1, shape: s1 } = this;
  const { length: ndim } = s1;

  if (begin < 0 || end < 0) {
    return this.slice(begin < 0 ? ndim + begin : begin, end < 0 ? ndim + end : end);
  }

  if (step === 0) {
    throw new Error('step argument cannot be 0');
  }

  const s2: number[] = [Math.ceil((end - begin) / step), ...s1.slice(1)];
  const l2: number = s2.reduce((sum: number, dim: number) => sum * dim, 1);
  const d2: TypedArray = new (get_type(this.dtype))(l2);

  let i: number;
  for (i = 0; i < l2; i += 1) {
    d2[i] = d1[begin + i * step];
  }

  this.length = l2;
  this.data = d2;
  this.reshape(...s2);

  return this;
};
