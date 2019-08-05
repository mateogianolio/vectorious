import { Matrix } from './';

let nlapack: any;
try {
  nlapack = require('nlapack');
} catch (err) {}

Matrix.solve = <T extends Matrix>(x: T, y: T): T => x.copy().solve(y);

Matrix.prototype.solve = function<T extends Matrix>(this: T, x: T): T {
  const [n, nrhs] = x.shape;

  try {
    if (!(this.data instanceof Float64Array) || !(this.data instanceof Float32Array)) {
      this.type = Float32Array;
      this.data = Float32Array.from(this.data);
    }

    const ipiv: Int32Array = new Int32Array(n);
    if (this.data instanceof Float64Array) {
      nlapack.dgesv(n, nrhs, this.data, n, ipiv, x.data, nrhs);
    } else if (this.data instanceof Float32Array) {
      nlapack.sgesv(n, nrhs, this.data, n, ipiv, x.data, nrhs);
    }
  } catch (err) {
    const [LU, ipiv] = this.lu_factor();
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
          x.set(i, k, x.get(i, k) - LU.get(i, j) * x.get(j, k));
        }
      }

      for (i = n - 1; i >= 0; i -= 1) {
        for (j = i + 1; j < n; j += 1) {
          x.set(i, k, x.get(i, k) - LU.get(i, j) * x.get(j, k));
        }

        x.set(i, k, x.get(i, k) / LU.get(i, i));
      }
    }
  }

  return x;
};
