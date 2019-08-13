import { get_type } from '../util';

import { NDArray } from './';

let nlapack: any;
try {
  nlapack = require('nlapack');
} catch (err) {}

NDArray.solve = <T extends NDArray>(x: T | ArrayLike<any>, y: T | ArrayLike<any>): T =>
  NDArray.array<T>(x).solve(NDArray.array<T>(y));

NDArray.prototype.solve = function<T extends NDArray>(this: T, x: T): T {
  const [n, nrhs] = x.shape;

  try {
    if (!['float32', 'float64'].includes(this.dtype)) {
      this.dtype = 'float32';
      this.data = get_type(this.dtype).from(this.data);
    }

    const { data: d1 } = this;
    const { data: d2 } = x;
    const ipiv: Int32Array = new Int32Array(n);
    if (this.dtype === 'float64') {
      nlapack.dgesv(n, nrhs, d1, n, ipiv, d2, nrhs);
    } else if (this.dtype === 'float32') {
      nlapack.sgesv(n, nrhs, d1, n, ipiv, d2, nrhs);
    }
  } catch (err) {
    const [LU, ipiv] = this.lu_factor();
    const { data: d1 } = LU;
    const { data: d2 } = x;

    let i: number;
    let j: number;
    let k: number;

    for (i = 0; i < ipiv.length; i += 1) {
      if (i !== ipiv[i] - 1) {
        x.swap(i, ipiv[i] - 1);
      }
    }

    for (k = 0; k < nrhs; k += 1) {
      for (i = 0; i < n; i += 1) {
        for (j = 0; j < i; j += 1) {
          d2[i * nrhs + k] -= d1[i * n + j] * d2[j * nrhs + k];
        }
      }

      for (i = n - 1; i >= 0; i -= 1) {
        for (j = i + 1; j < n; j += 1) {
         d2[i * nrhs + k] -= d1[i * n + j] * d2[j * nrhs + k];
        }

        d2[i * nrhs + k] /= d1[i * n + i];
      }
    }
  }

  return x;
};
