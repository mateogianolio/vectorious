import { get_type } from '../util';

import { NDArray } from './';

let nblas: any;
try {
  nblas = require('nblas');
} catch (err) {}

NDArray.norm = <T extends NDArray>(x: T | ArrayLike<any>): number => NDArray.array<T>(x).norm();

NDArray.prototype.norm = function<T extends NDArray>(this: T): number {
  const { length: l1 } = this;
  let result: number = 0;

  try {
    if (!['float32', 'float64'].includes(this.dtype)) {
      this.dtype = 'float32';
      this.data = get_type(this.dtype).from(this.data);
    }

    const { data: d1 } = this;
    if (this.dtype === 'float64') {
      result = nblas.dnrm2(l1, d1, 1);
    }

    if (this.dtype === 'float32') {
      result = nblas.snrm2(l1, d1, 1);
    }
  } catch (err) {
    result = Math.sqrt(this.dot(this));
  }

  return result;
};
