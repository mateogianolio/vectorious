import { NDArray, array } from './';

/**
 * @static
 * @function rank
 * @description Finds the rank of `x` using gaussian elimination.
 * @param {NDArray} x
 * @returns {Number}
 * @example
 * import { rank } from 'vectorious/core/rank';
 * 
 * rank([[1, 1, 1], [2, 2, 2], [3, 3, 3]]); // => 1
 */
export const rank = (x: NDArray | ArrayLike<any>): number => array(x).rank();

/**
 * @function rank
 * @memberof NDArray.prototype
 * @description Finds the rank of current matrix using gaussian elimination.
 * @returns {Number}
 * @example
 * import { array } from 'vectorious/core/array';
 * 
 * array([[1, 1, 1], [2, 2, 2], [3, 3, 3]]).rank(); // => 1
 */
export default function(this: NDArray): number {
  this.gauss();

  const [r, c] = this.shape;
  const { data: d1 } = this;

  let rk: number = 0;
  let i: number;
  let j: number;

  for (i = 0; i < r; i += 1) {
    for (j = i; j < c; j += 1) {
      if (rk <= i && d1[i * c + j] !== 0) {
        rk += 1;
        continue;
      }
    }
  }

  return rk;
};
