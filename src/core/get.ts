import { NDArray } from './';
import { array } from './array';

/**
 * @static
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
export default function(this: NDArray, ...indices: number[]): number {
  this.check(...indices);

  const { data: d1, shape: s1 } = this;
  const { length: ndim } = s1;
  let index: number = indices[ndim - 1];

  let i: number;
  let j: number;
  for (i = 0; i < ndim - 1; i += 1) {
    let p: number = 1;
    for (j = i + 1; j < ndim; j += 1) {
      p *= s1[j];
    }

    index += indices[i] * p;
  }

  return d1[index];
};
