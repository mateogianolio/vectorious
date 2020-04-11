import { NDArray } from './';
import { array } from './array';

/**
 * @static
 * @function check
 * @description Asserts if indices `i, j, ..., n` are within the bounds of `x`
 * @param {NDArray} x
 * @param {Number[]} ...indices
 * @throws {Error} index out of bounds
 * @example
 * import { check } from 'vectorious/core/check';
 * 
 * check([0.5, 1.5, 2.5], 3); // Error: index out of bounds
 */
export const check = (x: NDArray | ArrayLike<any>, ...indices: number[]): void => {
  array(x).check(...indices);
};

/**
 * @function check
 * @memberof NDArray.prototype
 * @description Asserts if indices `i, j, ..., n` are within the bounds of current array
 * @param {Number[]} ...indices
 * @throws {Error} index out of bounds
 * @example
 * import { array } from 'vectorious/core/array';
 * 
 * array([0.5, 1.5, 2.5]).check(3); // Error: index out of bounds
 */
export default function(this: NDArray, ...indices: number[]): void {
  const { shape: s1, length: l1 } = this;

  if (indices.length === 1) {
    const [i] = indices;
    if (i < 0 || i > l1 - 1 || !Number.isFinite(i)) {
      throw new Error('index out of bounds');
    }
  } else if (!s1.every((dim: number, i: number) =>
    dim > indices[i]
    && Number.isFinite(indices[i])
    && indices[i] >= 0
  )) {
    throw new Error('index out of bounds');
  }
};
