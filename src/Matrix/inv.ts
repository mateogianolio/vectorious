import { Matrix } from './';

let nlapack: any;
try {
  nlapack = require('nlapack');
} catch (err) {}

Matrix.inv = <T extends Matrix>(x: T): T => x.inv();

Matrix.prototype.inv = function<T extends Matrix>(this: T): T {
  this.square();

  const [n] = this.shape;

  try {
    if (!(this.data instanceof Float64Array) || !(this.data instanceof Float32Array)) {
      this.type = Float32Array;
      this.data = Float32Array.from(this.data);
    }

    const ipiv: Int32Array = new Int32Array(n);
    if (this.data instanceof Float64Array) {
      nlapack.dgetrf(n, n, this.data, n, ipiv);
      nlapack.dgetri(n, this.data, n, ipiv);
    } else if (this.data instanceof Float32Array) {
      nlapack.sgetrf(n, n, this.data, n, ipiv);
      nlapack.sgetri(n, this.data, n, ipiv);
    }

    return this;
  } catch (err) {
    const eye: T = Matrix.eye(n);
    const rref: T = Matrix.augment(this, eye).gauss();
    const left: T = Matrix.zeros(n, n);
    const right: T = Matrix.zeros(n, n);

    let i: number;
    let j: number;

    for (i = 0; i < n; i += 1) {
      for (j = 0; j < n + n; j += 1) {
        if (j < n) {
          left.set(i, j, rref.get(i, j));
        } else {
          right.set(i, j - n, rref.get(i, j));
        }
      }
    }

    if (!left.equals(eye)) {
      throw new Error('matrix is not invertible');
    }

    return right;
  }
};
