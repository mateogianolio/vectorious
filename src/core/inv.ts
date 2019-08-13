import { get_type } from '../util';

import { NDArray } from './';

let nlapack: any;
try {
  nlapack = require('nlapack');
} catch (err) {}

NDArray.inv = <T extends NDArray>(x: T | ArrayLike<any>): T => NDArray.array<T>(x).inv();

NDArray.prototype.inv = function<T extends NDArray>(this: T): T {
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
    const eye: T = NDArray.eye(n);
    const rref: T = NDArray.augment(this, eye).gauss();
    const left: T = NDArray.zeros(n, n);
    const right: T = NDArray.zeros(n, n);

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

    if (!left.equals(eye)) {
      throw new Error('matrix is not invertible');
    }

    return right;
  }
};
