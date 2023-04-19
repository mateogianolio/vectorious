import { NDArray } from './';
import { array } from './array';
import { zeros } from './zeros';

/**
 * @static
 * @memberof module:Globals
 * @function augment
 * @description Augments `x` and `y`.
 * @param {NDArray} x
 * @param {NDArray} y
 * @returns {NDArray}
 * @example
 * import { augment } from 'vectorious/core/augment';
 *
 * augment([[1, 2], [3, 4]], [[1], [2]]); // => array([[1, 2, 1], [3, 4, 2]])
 */
export const augment = (x: NDArray | ArrayLike<any>, y: NDArray | ArrayLike<any>): NDArray =>
  array(x).augment(array(y));

/**
 * @function augment
 * @memberof NDArray.prototype
 * @description Augments `x` with current matrix.
 * @param {NDArray} x
 * @returns {this}
 * @example
 * import { array } from 'vectorious/core/array';
 *
 * array([[1, 2], [3, 4]]).augment(array([[1], [2]])); // <=> array([[1, 2, 1], [3, 4, 2]])
 */
export default function (this: NDArray, x: NDArray | ArrayLike<any>): NDArray {
  const [r1, c1] = this.shape;
  const [r2, c2] = array(x).shape;
  const { data: d1 } = this;
  const { data: d2 } = array(x);

  if (r2 === 0 || c2 === 0) {
    return this;
  }

  if (r1 !== r2) {
    throw new Error('rows do not match');
  }

  const y = zeros(r1, c1 + c2);
  const { data: d3 } = y;

  let i: number;
  let j: number;
  for (i = 0; i < r1; i += 1) {
    for (j = 0; j < c1; j += 1) {
      d3[i * (c1 + c2) + j] = d1[i * c1 + j];
    }
  }

  for (i = 0; i < r2; i += 1) {
    for (j = 0; j < c2; j += 1) {
      d3[i * (c1 + c2) + (j + c1)] = d2[i * c2 + j];
    }
  }

  return y;
}
