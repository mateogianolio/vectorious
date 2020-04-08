import { NDArray, array } from './';

/**
 * @static
 * @function equals
 * @description Checks if `x` and `y` are equal.
 * @param {NDArray} x
 * @param {NDArray} y
 * @returns {Boolean}
 * @example
 * import { equals } from 'vectorious/core/equals';
 * 
 * equals([1, 2, 3], [1, 2, 3]); // => true
 */
export const equals = (x: NDArray | ArrayLike<any>, y: NDArray | ArrayLike<any>): boolean =>
  array(x).equals(array(y));

/**
 * @function equals
 * @memberof NDArray.prototype
 * @description Checks if current array and `x` are equal.
 * @param {NDArray} x
 * @returns {Boolean}
 * @example
 * import { equals } from 'vectorious/core/equals';
 * 
 * array([1, 2, 3]).equals([1, 2, 3]); // => true
 */
export default function(this: NDArray, x: NDArray): boolean {
  this.equilateral(x);
  this.equidimensional(x);

  const { data: d1, length: l1 } = this;
  const { data: d2 } = x;

  let i: number;

  for (i = 0; i < l1; i += 1) {
    if (d1[i] !== d2[i]) {
      return false;
    }
  }

  return true;
};
