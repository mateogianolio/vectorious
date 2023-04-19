import { NDArray } from './';
import { array } from './array';

/**
 * @static
 * @memberof module:Globals
 * @function toArray
 * @description Converts `x` into a JavaScript array.
 * @param {NDArray} x
 * @returns {Array}
 * @example
 * import { toArray } from 'vectorious/core/toArray';
 *
 * toArray([1, 2, 3]); // => [1, 2, 3]
 */
export const toArray = (x: NDArray | ArrayLike<any>): any => array(x).toArray();

/**
 * @function toArray
 * @memberof NDArray.prototype
 * @description Converts current vector into a JavaScript array.
 * @param {Number} index
 * @param {Number} dim
 * @returns {Array}
 * @example
 * import { array } from 'vectorious/core/array';
 *
 * array([1, 2, 3]).toArray(); // => [1, 2, 3]
 */
export default function (this: NDArray, index: number = 0, dim = 0): any {
  const { data: d1, shape: s1, strides: st1 } = this;
  const { length: ndim } = s1;

  if (dim >= ndim) {
    return d1[index];
  }

  const n = s1[dim];
  const stride = st1[dim];
  const list = [];

  for (let i = 0; i < n; i++) {
    const item = this.toArray(index, dim + 1);
    if (item === null) {
      return null;
    }

    list[i] = item;
    index += stride;
  }

  return list;
}
