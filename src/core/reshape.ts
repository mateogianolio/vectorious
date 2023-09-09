import { get_strides } from '../util';

import { NDArray } from './';
import { array } from './array';

/**
 * @static
 * @memberof vectorious
 * @function reshape
 * @description Reshapes `x`
 * @param {NDArray} x
 * @param {Number[]} ...shape
 * @returns {NDArray}
 * @example
 * import { reshape } from 'vectorious/core/reshape';
 *
 * reshape([1, 2, 3, 4], 2, 2); // => array([[1, 2], [3, 4]])
 */
export const reshape = (x: NDArray | ArrayLike<any>, ...shape: number[]): NDArray =>
  array(x).reshape(...shape);

export default function (this: NDArray, ...shape: number[]): NDArray {
  const { length } = this;
  if (shape.reduce((sum: number, dim: number) => sum * dim, 1) !== length) {
    throw new Error(`shape ${shape} does not match length ${length}`);
  }

  this.shape = shape;
  this.strides = get_strides(shape);

  return this;
}
