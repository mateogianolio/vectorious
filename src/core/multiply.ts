import { get_type } from '../util';

import { NDArray } from './';

let nblas: any;
try {
  nblas = require('nblas');
} catch (err) {}

NDArray.multiply = <T extends NDArray>(x: T, y: T): T => x.multiply(y);

NDArray.prototype.multiply = function<T extends NDArray>(this: T, x: T): T {
  const [r1, c1] = this.shape;
  const [r2, c2] = x.shape;

  if (c1 !== r2) {
    throw new Error('sizes do not match');
  }

  const y: NDArray = NDArray.matrix(r1, c2);

  try {
    if (!['float32', 'float64'].includes(this.dtype)) {
      this.dtype = 'float32';
      this.data = get_type(this.dtype).from(this.data);
    }

    const { data: d1 } = this;
    const { data: d2 } = x;
    const { data: d3 } = y;
    if (this.dtype === 'float64') {
      nblas.dgemm(nblas.NoTrans, nblas.NoTrans, r1, c2, c1, 1, d1, c1, d2, c2, 0, d3, c2);
    } else if (this.dtype === 'float32') {
      nblas.sgemm(nblas.NoTrans, nblas.NoTrans, r1, c2, c1, 1, d1, c1, d2, c2, 0, d3, c2);
    }
  } catch (err) {
    const { data: d1 } = this;
    const { data: d2 } = x;
    const { data: d3 } = y;

    let i: number;
    let j: number;
    let k: number;
    let sum: number;
    for (i = 0; i < r1; i += 1) {
      for (j = 0; j < c2; j += 1) {
        sum = 0;
        for (k = 0; k < c1; k += 1) {
          sum += d1[i * c1 + k] * d2[k * c2 + j];
        }

        d3[i * c2 + j] = sum;
      }
    }
  }

  return y as T;
};
