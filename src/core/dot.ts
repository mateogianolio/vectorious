import { get_type } from '../util';

import { NDArray } from './';

let nblas: any;
try {
  nblas = require('nblas');
} catch (err) {}

NDArray.dot = <T extends NDArray>(x: T | ArrayLike<any>, y: T | ArrayLike<any>): number =>
  NDArray.array<T>(x).dot(NDArray.array<T>(y));

NDArray.prototype.dot = function<T extends NDArray>(this: T, x: T): number {
  this.equilateral(x);
  this.equidimensional(x);

  const { length: l1 } = this;
  let result: number = 0;

  try {
    if (!['float32', 'float64'].includes(this.dtype)) {
      this.dtype = 'float32';
      this.data = get_type(this.dtype).from(this.data);
    }

    const { data: d1 } = this;
    const { data: d2 } = x;
    if (this.dtype === 'float64') {
      result = nblas.ddot(l1, d2, 1, d1, 1);
    }

    if (this.dtype === 'float32') {
      result = nblas.sdot(l1, d2, 1, d1, 1);
    }
  } catch (err) {
    const { data: d1 } = this;
    const { data: d2 } = x;

    let i: number;
    for (i = 0; i < l1; i += 1) {
      result += d1[i] * d2[i];
    }
  }

  return result;
};
