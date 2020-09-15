import { NDArray } from './';
import { array } from './array';

/**
 * @static
 * @memberof module:Globals
 * @function cross
 * @description
 * Computes the cross product of the `x` and the vector `y`
 * This operation can only calculated for vectors with three components.
 * Otherwise it throws an exception.
 * @param {NDArray} x
 * @param {NDArray} y
 * @returns {NDArray}
 * @example
 * import { cross } from 'vectorious/core/cross';
 * 
 * cross([1, 2, 3], [4, 5, 6]); // => array([-3, 6, -3])
 */
export const cross = (x: NDArray | ArrayLike<any>, y: NDArray | ArrayLike<any>): NDArray =>
  array(x).cross(array(y));

/**
 * @function cross
 * @memberof NDArray.prototype
 * @description
 * Computes the cross product of the current vector and the vector `x`
 * This operation can only calculated for vectors with three components.
 * Otherwise it throws an exception.
 * @param {NDArray} x
 * @returns {this}
 * @example
 * import { array } from 'vectorious/core/array';
 * 
 * array([1, 2, 3]).cross([4, 5, 6]); // <=> array([-3, 6, -3])
 */
export default function(this: NDArray, x: NDArray): NDArray {
  const { length: l1 } = this;
  const { length: l2 } = x;

  if (l1 !== 3 || l2 !== 3) {
    throw new Error('vectors must have three components');
  }

  const c1: number = this.y * x.z - this.z * x.y;
  const c2: number = this.z * x.x - this.x * x.z;
  const c3: number = this.x * x.y - this.y * x.x;

  this.x = c1;
  this.y = c2;
  this.z = c3;

  return this;
};
