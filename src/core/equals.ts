import { NDArray } from './';
import { NDMultiIter } from '../iterator';
import { array } from './array';

/**
 * @static
 * @memberof module:Globals
 * @function equals
 * @description Checks if `x` and `y` are equal.
 * @param {NDArray} x
 * @param {NDArray} y
 * @param {Number} tolerance
 * @returns {Boolean}
 * @example
 * import { equals } from 'vectorious/core/equals';
 * 
 * equals([1, 2, 3], [1, 2, 3]); // => true
 */
export const equals = (x: NDArray | ArrayLike<any>, y: NDArray | ArrayLike<any>, tolerance: number = 1e-6): boolean =>
  array(x).equals(array(y), tolerance);

/**
 * @function equals
 * @memberof NDArray.prototype
 * @description Checks if current array and `x` are equal.
 * @param {NDArray} x
 * @param {Number} tolerance
 * @returns {Boolean}
 * @example
 * import { equals } from 'vectorious/core/equals';
 * 
 * array([1, 2, 3]).equals([1, 2, 3]); // => true
 */
export default function(this: NDArray, x: NDArray, tolerance: number = 1e-6): boolean {
  const { data: d1 } = this;
  const { data: d2 } = x;

  const iter = new NDMultiIter(this, x);

  for (const [i, j] of iter) {
    if (Math.abs(d1[i] - d2[j]) > tolerance) {
      return false;
    }
  }

  return true;
};
