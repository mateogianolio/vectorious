import { TypedArray } from '../types';

import { NDArray } from './';
import { NDIter } from '../iterator';

/**
 * @static
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

  const d1: TypedArray = new Float32Array(n * n);
  const magic = new NDArray(d1, { shape: [n, n] });
  const iter = new NDIter(magic);

  do {
    const [y, x] = iter.coords;
    const i = n - y - 1;
    const j = n - x - 1;

    d1[iter.pos] = ((x + i * 2 + 1) % n) * n + ((j + i * 2 + 1) % n) + 1;

    iter.next();
  } while (!iter.done());

  return magic;
};
