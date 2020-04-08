import { TypedArray } from '../types';

import { NDArray, array } from './';
import { NDIter } from '../iterator';

/**
 * @static
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
export default function(
  this: NDArray,
  f: (value: number, i: number, src: TypedArray) => number
): NDArray {
  const { data: d1 } = this;
  const iter = new NDIter(this);
  const map = f.bind(this);

  do {
    d1[iter.pos] = map(d1[iter.pos], iter.pos, d1);

    iter.next();
  } while (!iter.done());

  return this;
};
