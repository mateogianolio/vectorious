import { TypedArray } from '../types';

import { NDArray } from './';
import { NDIter } from '../iterators';
import { array } from './array';

/**
 * @static
 * @memberof vectorious
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
    d2[i] = map(d1[i], i, d1);
  }

  return copy;
}
