import { get_type } from '../util';

import { NDArray, array, zeros, eye } from './';

let nlapack: any;
try {
  nlapack = require('nlapack');
} catch (err) {}

/**
 *  ┌   ┐    ┌     ┐┌   ┐
 *  │Skl│    │c  −s││Skl│
 *  │   │ := │     ││   │
 *  │Sij│    │s   c││Sij│
 *  └   ┘    └     ┘└   ┘
 */
const rotate:
  (x: NDArray, c: number, s: number, k: number, l: number, i: number, j: number) => void =
  (x: NDArray, c: number, s: number, k: number, l: number, i: number, j: number): void => {
    const [n] = x.shape;
    const { data: d1 } = x;
    const temp: number = d1[k * n + l];
    const tau: number = 1 / (c + s);

    d1[k * n + l] = temp - s * (d1[i * n + j] + tau * temp);
    d1[i * n + j] += s * (temp - tau * d1[i * n + j]);
  };

/**
 * @static
 * @function eig
 * @description
 * Gets eigenvalues and eigenvectors of `x` using the Jacobi method.
 * Accelerated with LAPACK `?geev`.
 * @param {NDArray} x
 * @returns {Array<NDArray>}
 * @example
 * import { eig } from 'vectorious/core/eig';
 * 
 * eig([[1, 0, 0], [0, 2, 0], [0, 0, 3]]); // => [array([1, 2, 3]), array([[1, 0, 0], [0, 1, 0], [0, 0, 1]])]
 */
export const eig = (x: NDArray | ArrayLike<any>): [NDArray, NDArray] => array(x).eig();

/**
 * @function eig
 * @memberof NDArray.prototype
 * @description
 * Gets eigenvalues and eigenvectors of the current matrix using the Jacobi method.
 * Accelerated with LAPACK `?geev`.
 * @returns {Array<NDArray>}
 * @example
 * import { array } from 'vectorious/core/array';
 * 
 * array([[1, 0, 0], [0, 2, 0], [0, 0, 3]]).eig(); // => [array([1, 2, 3]), array([[1, 0, 0], [0, 1, 0], [0, 0, 1]])]
 */
export default function(this: NDArray): [NDArray, NDArray] {
  this.square();

  const [n] = this.shape;

  try {
    if (!['float32', 'float64'].includes(this.dtype)) {
      this.dtype = 'float32';
      this.data = get_type(this.dtype).from(this.data);
    }

    const jobvl: typeof nlapack.NDArrayEigenvector = nlapack.NoEigenvector;
    const jobvr: typeof nlapack.NDArrayEigenvector = nlapack.Eigenvector;

    const wr = zeros(n);
    const wi = zeros(n);

    const vl = zeros(n, n);
    const vr = zeros(n, n);

    const { data: d1 } = this;
    const { data: d2 } = wr;
    const { data: d3 } = wi;
    const { data: d4 } = vl;
    const { data: d5 } = vr;
    if (this.dtype === 'float64') {
      nlapack.dgeev(jobvl, jobvr, n, d1, n, d2, d3, d4, n, d5, n);
    }

    if (this.dtype === 'float32') {
      nlapack.sgeev(jobvl, jobvr, n, d1, n, d2, d3, d4, n, d5, n);
    }

    return [wr, vr];
  } catch (err) {
    const { data: d1 } = this;
    const p = eye(n);

    let max = 0;
    let i = 0;
    let j = 0;
    let k = 0;
    let l = 0;

    do {
      // Find maximum off-diagonal element
      for (i = 0; i < n; i += 1) {
        for (j = i + 1; j < n; j += 1) {
          if (Math.abs(d1[i * n + j]) >= max) {
            max = Math.abs(d1[i * n + j]);
            k = i;
            l = j;
          }
        }
      }

      // Find c and s
      let t;
      if (Math.abs(d1[k * n + l]) < Math.abs(d1[l * n + l]) * 1e-36) {
        t = d1[k * n + l] / d1[l * n + l];
      } else {
        const phi = d1[l * n + l] / 2 * d1[k * n + l];
        t = 1 / (Math.abs(phi) + Math.sqrt(phi * phi + 1));
      }

      const c = 1 / Math.sqrt(t * t + 1);
      const s = t * c;

      const e = d1[k * n + l];
      d1[k * n + l] = 0;
      d1[k * n + k] -= t * e;
      d1[l * n + l] += t * e;

      // Rotate rows and columns k and l
      for (i = 0; i < k; i += 1) {
        rotate(this, c, s, i, k, i, l);
      }

      for (i = k + 1; i < l; i += 1) {
        rotate(this, c, s, k, i, i, l);
      }

      for (i = l + 1; i < n; i += 1) {
        rotate(this, c, s, k, i, l, i);
      }

      // Rotate eigenvectors
      for (i = 0; i < n; i += 1) {
        rotate(p, c, s, i, k, i, l);
      }
    } while (max >= 1e-9);

    return [this.diagonal(), p];
  }
};
