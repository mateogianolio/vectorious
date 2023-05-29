import { TypedArray } from '../types';

import { NDArray } from './';
import { NDIter } from '../iterators';

/**
 * @static
 * @memberof module:Globals
 * @function magic
 * @description Creates a magic square matrix of size `n`
 * @param {Number} n
 * @returns {NDArray}
 * @example
 * import { magic } from 'vectorious/core/magic';
 *
 * magic(3); // => array([[8, 1, 6], [3, 5, 7], [4, 9, 2]])
 */
export const magic = (n: number): NDArray => {
  if (n < 0) {
    throw new Error('invalid n');
  }

  const d1: TypedArray = new Float64Array(n * n);
  const magic = new NDArray(d1, { shape: [n, n] });
  const iter = new NDIter(magic);

  let [ci, cj] = iter.coords;
  for (const i of iter) {
    const a = n - ci - 1;
    const b = n - cj - 1;

    d1[i] = ((cj + a * 2 + 1) % n) * n + ((b + a * 2 + 1) % n) + 1;
    [ci, cj] = iter.coords;
  }

  return magic;
};
