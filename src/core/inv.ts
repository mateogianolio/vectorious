import { get_type } from '../util';

import { NDArray } from './';
import { array } from './array';
import { eye } from './eye';
import { augment } from './augment';
import { zeros } from './zeros';

let nlapack: any;
try {
  nlapack = require('nlapack');
} catch (err) {}

/**
 * @static
 * @function inv
 * @description
 * Determines the inverse of `x`.
 * Accelerated with LAPACK `?getri`.
 * @param {NDArray} x
 * @returns {NDArray}
 * @example
 * import { inv } from 'vectorious/core/inv';
 * 
 * inv([[2, -1, 0], [-1, 2, -1], [0, -1, 2]]); // => array([[0.75, 0.5, 0.25], [0.5, 1, 0.5], [0.25, 0.5, 0.75]])
 */
export const inv = (x: NDArray | ArrayLike<any>): NDArray => array(x).inv();

/**
 * @function inv
 * @memberof NDArray.prototype
 * @description
 * Determines the inverse of current matrix using Gaussian elimination.
 * Accelerated with LAPACK `?getri`.
 * @returns {this}
 * @example
 * import { array } from 'vectorious/core/array';
 * 
 * array([[2, -1, 0], [-1, 2, -1], [0, -1, 2]]).inv(); // <=> array([[0.75, 0.5, 0.25], [0.5, 1, 0.5], [0.25, 0.5, 0.75]])
 */
export default function(this: NDArray): NDArray {
  this.square();

  const [n] = this.shape;

  try {
    if (!['float32', 'float64'].includes(this.dtype)) {
      this.dtype = 'float32';
      this.data = get_type(this.dtype).from(this.data);
    }

    const { data: d1 } = this;
    const ipiv: Int32Array = new Int32Array(n);
    if (this.dtype === 'float64') {
      nlapack.dgetrf(n, n, d1, n, ipiv);
      nlapack.dgetri(n, d1, n, ipiv);
    } else if (this.dtype === 'float32') {
      nlapack.sgetrf(n, n, d1, n, ipiv);
      nlapack.sgetri(n, d1, n, ipiv);
    }

    return this;
  } catch (err) {
    const identity = eye(n);
    const rref = augment(this, identity).gauss();
    const left = zeros(n, n);
    const right = zeros(n, n);

    const { data: d1 } = rref;
    const { data: d2 } = left;
    const { data: d3 } = right;

    let i: number;
    let j: number;

    for (i = 0; i < n; i += 1) {
      for (j = 0; j < n + n; j += 1) {
        if (j < n) {
          d2[i * n + j] = d1[i * (n + n) + j];
        } else {
          d3[i * n + (j - n)] = d1[i * (n + n) + j];
        }
      }
    }

    if (!left.equals(identity)) {
      throw new Error('matrix is not invertible');
    }

    return right;
  }
};
