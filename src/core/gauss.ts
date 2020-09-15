import { NDArray } from './';
import { NDIter } from '../iterator';
import { array } from './array';
// import { diagonal } from './diagonal';
import * as lapack from '../lapack';

/**
 * @static
 * @memberof module:Globals
 * @function gauss
 * @description
 * Gauss-Jordan elimination (i.e. returns the reduced row echelon form) of `x`.
 * Accelerated with LAPACK `?getrf`.
 * @param {NDArray} x
 * @returns {NDArray}
 * @example
 * import { gauss } from 'vectorious/core/gauss';
 * 
 * gauss([[1, 2, 3], [4, 5, 6]]); // => array([[1, 0, -1], [-0, 1, 2]])
 */
export const gauss = (x: NDArray | ArrayLike<any>): NDArray => array(x).gauss();

/**
 * @function gauss
 * @memberof NDArray.prototype
 * @description
 * Gauss-Jordan elimination (i.e. returns the reduced row echelon form) of the current matrix.
 * Accelerated with LAPACK `?getrf`.
 * @returns {NDArray}
 * @example
 * import { array } from 'vectorious/core/array';
 * 
 * array([[1, 2, 3], [4, 5, 6]]).gauss(); // <=> array([[1, 0, -1], [-0, 1, 2]])
 */
export default function(this: NDArray): NDArray {
  const { shape: [r, c], data: d1, dtype } = this;

  try {
    const { data: d1 } = this;
    const ipiv = new Int32Array(Math.min(r, c));

    lapack.getrf(dtype, r, c, d1, c, ipiv);

    const iter = new NDIter(this);

    // Zero out lower triangular part of matrix
    let [ci, cj] = iter.coords;
    for (const i of iter) {
      if (cj < ci) {
        d1[i!] = 0;
      }

      [ci, cj] = iter.coords;
    }
  } catch (err) {
    let lead: number = 0;
    let leadValue: number;
    let pivot: number;

    let i: number;
    let j: number;
    let k: number;
    for (i = 0; i < r; i += 1) {
      if (c <= lead) {
        return this;
      }

      j = i;
      while (d1[j * c + lead] === 0) {
        j += 1;
        if (r === j) {
          j = i;
          lead += 1;

          if (c === lead) {
            return this;
          }
        }
      }

      if (i !== j) {
        this.swap(i, j);
      }

      pivot = d1[i * c + lead];
      if (pivot !== 0) {
        for (k = 0; k < c; k += 1) {
          d1[i * c + k] /= pivot;
        }
      }

      for (j = 0; j < r; j += 1) {
        leadValue = d1[j * c + lead];
        if (j !== i) {
          for (k = 0; k < c; k += 1) {
            d1[j * c + k] -= d1[i * c + k] * leadValue;
          }
        }
      }

      lead += 1;
    }

    for (i = 0; i < r; i += 1) {
      pivot = 0;
      for (j = 0; j < c; j += 1) {
        if (pivot === 0) {
          pivot = d1[i * c + j];
        }
      }

      if (pivot === 0) {
        for (k = 0; k < c; k += 1) {
          d1[i * c + k] /= pivot;
        }
      }
    }
  }

  return this;
};
