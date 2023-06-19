import { NDArray } from './';
import { array } from './array';

/**
 * @static
 * @memberof vectorious
 * @function normalize
 * @description Normalizes `x`.
 * @param {NDArray} x
 * @returns {NDArray}
 * @example
 * import { normalize } from 'vectorious/core/normalize';
 *
 * normalize([1, 2, 3]); // => array([0.26726123690605164, 0.5345224738121033, 0.8017836809158325])
 */
export const normalize = (x: NDArray | ArrayLike<any>): NDArray => array(x).normalize();

export default function (this: NDArray): NDArray {
  return this.scale(1 / this.norm());
}
