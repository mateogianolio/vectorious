import { TypedArray } from '../types';

import { NDArray } from './';
import { array } from './array';
import { NDIter } from '../iterator';

/**
 * @static
 * @function reduce
 * @description Equivalent to `TypedArray.prototype.reduce`.
 * @param {NDArray} x
 * @param {Function} f
 * @param {Number} initialValue
 * @returns {Number}
 * @example
 * import { reduce } from 'vectorious/core/reduce';
 * 
 * reduce([1, 2, 3], (a, b) => a + b, 0); // => 6
 */
export const reduce = (
  x: NDArray,
  f: (acc: number, value: number, i: number, src: TypedArray) => number,
  initialValue?: number
): number => array(x).reduce(f, initialValue);

/**
 * @function reduce
 * @memberof NDArray.prototype
 * @description Equivalent to `TypedArray.prototype.reduce`.
 * @param {Function} f
 * @param {Number} initialValue
 * @returns {Number}
 * @example
 * import { array } from 'vectorious/core/array';
 * 
 * array([1, 2, 3]).reduce((a, b) => a + b, 0); // => 6
 */
export default function(
  this: NDArray,
  f: (acc: number, value: number, i: number, src: TypedArray) => number,
  initialValue?: number
): number {
  const { data: d1, length: l1 } = this;
  if (l1 === 0 && typeof initialValue === 'undefined') {
    throw new Error('Reduce of empty array with no initial value.');
  }

  const iter = new NDIter(this);
  const reduce = f.bind(this);

  let value: number;

  if (typeof initialValue === 'undefined') {
    value = d1[0];
    iter.next();
  } else {
    value = initialValue;
  }

  do {
    value = reduce(value, d1[iter.pos], iter.pos, d1);

    iter.next();
  } while (!iter.done());

  return value;
};
