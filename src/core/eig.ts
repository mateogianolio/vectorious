import { get_type } from '../util';

import { NDArray } from './';

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
  <T extends NDArray>(x: T, c: number, s: number, k: number, l: number, i: number, j: number) => void =
  <T extends NDArray>(x: T, c: number, s: number, k: number, l: number, i: number, j: number): void => {
    const [n] = x.shape;
    const { data: d1 } = x;
    const temp: number = d1[k * n + l];
    const tau: number = 1 / (c + s);

    d1[k * n + l] = temp - s * (d1[i * n + j] + tau * temp);
    d1[i * n + j] += s * (temp - tau * d1[i * n + j]);
  };

NDArray.eig = <T extends NDArray>(x: T | ArrayLike<any>): [T, T] => NDArray.array<T>(x).eig();

NDArray.prototype.eig = function<T extends NDArray>(this: T): [T, T] {
  this.square();

  const [n] = this.shape;

  try {
    if (!['float32', 'float64'].includes(this.dtype)) {
      this.dtype = 'float32';
      this.data = get_type(this.dtype).from(this.data);
    }

    const jobvl: typeof nlapack.NDArrayEigenvector = nlapack.NoEigenvector;
    const jobvr: typeof nlapack.NDArrayEigenvector = nlapack.Eigenvector;

    const wr: T = NDArray.zeros(n);
    const wi: T = NDArray.zeros(n);

    const vl: T = NDArray.zeros(n, n);
    const vr: T = NDArray.zeros(n, n);

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
    const p: T = NDArray.eye(n);

    let max: number = 0;
    let i: number = 0;
    let j: number = 0;
    let k: number = 0;
    let l: number = 0;

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
      let t: number;
      if (Math.abs(d1[k * n + l]) < Math.abs(d1[l * n + l]) * 1e-36) {
        t = d1[k * n + l] / d1[l * n + l];
      } else {
        const phi: number = d1[l * n + l] / 2 * d1[k * n + l];
        t = 1 / (Math.abs(phi) + Math.sqrt(phi * phi + 1));
      }

      const c: number = 1 / Math.sqrt(t * t + 1);
      const s: number = t * c;

      const e: number = d1[k * n + l];
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
