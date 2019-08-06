import { get_type } from '../util';

import { Matrix } from './';

let nblas: any;
try {
  nblas = require('nblas');
} catch (err) {}

Matrix.multiply = <T extends Matrix>(x: T, y: T): T => x.multiply(y);

Matrix.prototype.multiply = function<T extends Matrix>(this: T, x: T): T {
  const [r1, c1] = this.shape;
  const [r2, c2] = x.shape;

  if (c1 !== r2) {
    throw new Error('sizes do not match');
  }

  const y: Matrix = new Matrix(r1, c2);

  try {
    if (!['float32', 'float64'].includes(this.dtype)) {
      this.dtype = 'float32';
      this.data = get_type(this.dtype).from(this.data);
    }

    if (this.dtype === 'float64') {
      nblas.dgemm(nblas.NoTrans, nblas.NoTrans, r1, c2, c1, 1, this.data, c1, x.data, c2, 0, y.data, c2);
    } else if (this.dtype === 'float32') {
      nblas.sgemm(nblas.NoTrans, nblas.NoTrans, r1, c2, c1, 1, this.data, c1, x.data, c2, 0, y.data, c2);
    }
  } catch (err) {
    let i: number;
    let j: number;
    let k: number;
    let sum: number;
    for (i = 0; i < r1; i += 1) {
      for (j = 0; j < c2; j += 1) {
        sum = 0;
        for (k = 0; k < c1; k += 1) {
          sum += this.get(i, k) * x.get(k, j);
        }

        y.set(i, j, sum);
      }
    }
  }

  return y as T;
};
