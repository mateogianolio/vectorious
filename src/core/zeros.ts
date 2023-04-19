import { NDArray } from './';

/**
 * @static
 * @memberof module:Globals
 * @function zeros
 * @description Creates an array containing zeros (`0`) of shape `shape`
 * @param {Number[]} ...shape
 * @returns {NDArray}
 * @example
 * import { zeros } from 'vectorious/core/zeros';
 *
 * zeros(3); // => array([0, 0, 0])
 */
export const zeros = (...shape: number[]): NDArray =>
  new NDArray(new Float64Array(shape.reduce((sum: number, dim: number) => sum * dim, 1)), {
    shape,
  }).fill(0);
