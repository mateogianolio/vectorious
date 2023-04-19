import { TypedArray } from '../types';

import { NDArray } from './';
import { NDIter } from '../iterator';
import { array } from './array';

/**
 * @static
 * @memberof module:Globals
 * @function map
 * @description Equivalent to `TypedArray.prototype.map`.
 * @param {NDArray} x
 * @returns {NDArray}
 * @example
 * import { map } from 'vectorious/core/map';
 *
 * map([1, 2, 3], value => -value); // => array([-1, -2, -3])
 */
export const map = (
  x: NDArray | ArrayLike<any>,
  f: (value: number, i: number, src: TypedArray) => number
): NDArray => array(x).map(f);

/**
 * @function map
 * @memberof NDArray.prototype
 * @description Equivalent to `TypedArray.prototype.map`.
 * @returns {this}
 * @example
 * import { array } from 'vectorious/core/array';
 *
 * array([1, 2, 3]).map(value => -value); // => array([-1, -2, -3])
 */
export default function (
  this: NDArray,
  f: (value: number, i: number, src: TypedArray) => number
): NDArray {
  const { data: d1 } = this;
  const iter = new NDIter(this);
  const map = f.bind(this);

  const copy = this.copy();
  const { data: d2 } = copy;

  for (const i of iter) {
    d2[i!] = map(d1[i!], i!, d1);
  }

  return copy;
}
