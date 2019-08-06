import { get_type } from '../util';

import { NDArray } from './';

let nblas: any;
try {
  nblas = require('nblas');
} catch (err) {}

NDArray.max = <T extends NDArray>(x: T): number => x.max();

NDArray.prototype.max = function<T extends NDArray>(this: T): number {
  const { length: l1 } = this;
  let result: number = Number.NEGATIVE_INFINITY;

  try {
    if (!['float32', 'float64'].includes(this.dtype)) {
      this.dtype = 'float32';
      this.data = get_type(this.dtype).from(this.data);
    }

    if (this.dtype === 'float64') {
      result = this.data[nblas.idamax(l1, this.data, 1)];
    }

    if (this.dtype === 'float32') {
      result = this.data[nblas.isamax(l1, this.data, 1)];
    }
  } catch (err) {
    let i: number;
    for (i = 0; i < l1; i += 1) {
      const value: number = this.get(i);
      result = result < value ? value : result;
    }
  }

  return result;
};
