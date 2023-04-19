import { NDArray } from './';

/**
 * @static
 * @memberof module:Globals
 * @function matrix
 * @description Creates a matrix of `r` rows and `c` columns.
 * @param {Number} r
 * @param {Number} c
 * @returns {NDArray}
 * @example
 * import { matrix } from 'vectorious/core/matrix';
 *
 * matrix(2, 2); // => array([[0, 0], [0, 0]])
 */
export const matrix = (r: number, c: number): NDArray =>
  new NDArray(new Float64Array(r * c), { shape: [r, c] });
