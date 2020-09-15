import { NDArray } from './';
import { NDMultiIter } from '../iterator';
import { array } from './array';

/**
 * @static
 * @memberof module:Globals
 * @function product
 * @description Hadamard product of `x` and `y`
 * @param {NDArray} x
 * @param {NDArray} y
 * @returns {NDArray}
 * @example
 * import { product } from 'vectorious/core/product';
 * 
 * product([1, 2, 3], [4, 5, 6]); // => array([4, 10, 18])
 */
export const product = (x: NDArray | ArrayLike<any>, y: NDArray | ArrayLike<any>): NDArray =>
  array(x).product(array(y));

/**
 * @function product
 * @memberof NDArray.prototype
 * @description Hadamard product of current matrix and `x`
 * @returns {NDArray}
 * @example
 * import { array } from 'vectorious/core/array';
 * 
 * array([1, 2, 3]).product([4, 5, 6]); // <=> array([4, 10, 18])
 */
export default function(this: NDArray, x: NDArray): NDArray {
  const { data: d1 } = this;
  const { data: d2 } = x;

  const iter = new NDMultiIter(this, x);
  for (const [i, j] of iter) {
    d1[i!] *= d2[j!];
  }

  return this;
};
