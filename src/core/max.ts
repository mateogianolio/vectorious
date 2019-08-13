import { get_type } from '../util';

import { NDArray } from './';

let nblas: any;
try {
  nblas = require('nblas');
} catch (err) {}

NDArray.max = <T extends NDArray>(x: T | ArrayLike<any>): number => NDArray.array<T>(x).max();

NDArray.prototype.max = function<T extends NDArray>(this: T): number {
  const { length: l1 } = this;
  let result: number = Number.NEGATIVE_INFINITY;

  try {
    if (!['float32', 'float64'].includes(this.dtype)) {
      this.dtype = 'float32';
      this.data = get_type(this.dtype).from(this.data);
    }

    const { data: d1 } = this;
    if (this.dtype === 'float64') {
      result = d1[nblas.idamax(l1, d1, 1)];
    }

    if (this.dtype === 'float32') {
      result = d1[nblas.isamax(l1, d1, 1)];
    }
  } catch (err) {
    const { data: d1 } = this;

    let i: number;
    for (i = 0; i < l1; i += 1) {
      const value: number = d1[i];
      result = result < value ? value : result;
    }
  }

  return result;
};
