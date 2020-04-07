import { NDArray } from './';

/**
 * @static
 * @function ones
 * @memberof NDArray
 * @description Creates an array containing ones (`1`) of shape `shape`
 * @param {Number[]} ...shape
 * @returns {NDArray}
 * @example
 * import { ones } from 'vectorious/core/ones';
 * 
 * ones(3); // => array([1, 1, 1])
 */
export const ones = (...shape: number[]): NDArray =>
  new NDArray(
    new Float32Array(shape.reduce((sum: number, dim: number) => sum * dim, 1)),
    { shape }
  ).fill(1);
