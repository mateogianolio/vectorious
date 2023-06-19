import { NDArray } from './';

/**
 * @static
 * @memberof vectorious
 * @function eye
 * @description Creates an identity matrix of size `n` and type `type`.
 * @param {Number} n
 * @returns {NDArray}
 * @example
 * import { eye } from 'vectorious/core/eye';
 *
 * eye(2); // => array([[1, 0], [0, 1]])
 */
export const eye = (n: number): NDArray => {
  const x = new NDArray(new Float64Array(n * n), { shape: [n, n] });
  const { data: d1 } = x;

  let i: number;
  for (i = 0; i < n; i += 1) {
    d1[i * n + i] = 1;
  }

  return x;
};
