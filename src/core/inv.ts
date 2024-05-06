import { NDArray } from './';
import { NDIter } from '../iterators';
import { array } from './array';
import { eye } from './eye';
import { augment } from './augment';
import { zeros } from './zeros';
import * as lapack from '../lapack';

/**
 * @static
 * @memberof vectorious
 * @function inv
 * @description
 * Determines the inverse of `x`.
 * Accelerated with LAPACK `?getrf` and `?getri`.
 * @param {NDArray} x
 * @returns {NDArray}
 * @example
 * import { inv } from 'vectorious/core/inv';
 *
 * inv([[2, -1, 0], [-1, 2, -1], [0, -1, 2]]); // => array([[0.75, 0.5, 0.25], [0.5, 1, 0.5], [0.25, 0.5, 0.75]])
 */
export const inv = (x: NDArray | ArrayLike<any>): NDArray => array(x).inv();

export default function (this: NDArray): NDArray {
  this.square();

  const {
    shape: [n],
    dtype,
  } = this;

  try {
    const { data: d1 } = this;
    const ipiv = new Int32Array(n);

    lapack.getrf(dtype, n, n, d1, n, ipiv);
    lapack.getri(dtype, n, d1, n, ipiv);

    return this;
  } catch (err) {
    const identity = eye(n);
    const rref = augment(this, identity).gauss();
    const left = zeros(n, n);
    const right = zeros(n, n);

    const { data: d1 } = rref;
    const { data: d2 } = left;
    const { data: d3 } = right;

    const iter = new NDIter(rref);
    let [ci, cj] = iter.coords;
    for (const i of iter) {
      if (cj < n) {
        d2[ci * n + cj] = d1[i];
      } else {
        d3[ci * n + (cj - n)] = d1[i];
      }

      [ci, cj] = iter.coords;
    }

    if (!left.equals(identity)) {
      throw new Error('matrix is not invertible');
    }

    return right;
  }
}
