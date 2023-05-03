import { TypedArray } from '../types';

import { NDArray } from './';
import { NDIter } from '../iterator';

/**
 * @static
 * @memberof module:Globals
 * @function forEach
 * @description Equivalent to `TypedArray.prototype.forEach`.
 * @param {NDArray} x
 * @param {Function} f
 * @example
 * import { forEach } from 'vectorious/core/forEach';
 *
 * forEach([1, 2, 3], console.log);
 * // 1 0 [ 1, 2, 3 ]
 * // 2 1 [ 1, 2, 3 ]
 * // 3 2 [ 1, 2, 3 ]
 */
export const forEach = (
  x: NDArray,
  f: (value: number, i: number, src: TypedArray) => void
): void => {
  x.forEach(f);
};

/**
 * @function forEach
 * @memberof NDArray.prototype
 * @description Equivalent to `TypedArray.prototype.forEach`.
 * @param {Function} f
 * @example
 * import { array } from 'vectorious/core/array';
 *
 * array([1, 2, 3]).forEach(console.log);
 * // 1 0 [ 1, 2, 3 ]
 * // 2 1 [ 1, 2, 3 ]
 * // 3 2 [ 1, 2, 3 ]
 */
export default function (
  this: NDArray,
  f: (value: number, i: number, src: TypedArray) => void
): void {
  const { data: d1 } = this;
  const iter = new NDIter(this);

  for (const i of iter) {
    f.call(this, d1[i], i, d1);
  }
}
