import { NDArray } from './';
import { NDIter } from '../iterator';
import { array } from './array';
import { matrix } from './matrix';
import * as blas from '../blas';

/**
 * @static
 * @memberof module:Globals
 * @function multiply
 * @description
 * Multiplies two matrices `x` and `y` of matching dimensions.
 * Accelerated with BLAS `?gemm`.
 * @param {NDArray} x
 * @param {NDArray} y
 * @returns {NDArray}
 * @example
 * import { multiply } from 'vectorious/core/multiply';
 * 
 * multiply([[1, 2]], [[1], [2]]); // => array([[5]])
 */
export const multiply = (x: NDArray | ArrayLike<any>, y: NDArray | ArrayLike<any>): NDArray =>
  array(x).multiply(array(y));

/**
 * @function multiply
 * @memberof NDArray.prototype
 * @description
 * Multiplies current matrix with `x`.
 * Accelerated with BLAS `?gemm`.
 * @param {NDArray} x
 * @returns {NDArray}
 * @example
 * import { array } from 'vectorious/core/array';
 * 
 * array([[1, 2]]).multiply([[1], [2]]); // <=> array([[5]])
 */
export default function(this: NDArray, x: NDArray): NDArray {
  const { shape: [r1, c1], data: d1, dtype } = this;
  const { shape: [r2, c2], data: d2 } = x;

  if (c1 !== r2) {
    throw new Error('sizes do not match');
  }

  const y = matrix(r1, c2);
  const { data: d3 } = y;

  try {
    blas.gemm(dtype, blas.NoTrans, blas.NoTrans, r1, c2, c1, 1, d1, c1, d2, c2, 0, d3, c2);
  } catch (err) {
    const iter = new NDIter(y);

    let k;
    let [ci, cj] = iter.coords;
    for (const i of iter) {
      let sum = 0;
      for (k = 0; k < c1; k += 1) {
        sum += d1[ci * c1 + k] * d2[k * c2 + cj];
      }

      d3[i!] = sum;
      [ci, cj] = iter.coords;
    }
  }

  return y;
};
