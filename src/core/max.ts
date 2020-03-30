import { get_type } from '../util';

import { NDArray } from './';
import { NDIter } from '../iterator';

let nblas: any;
try {
  nblas = require('nblas');
} catch (err) {}

NDArray.max = <T extends NDArray>(x: T | ArrayLike<any>): number => NDArray.array<T>(x).max();

NDArray.prototype.max = function<T extends NDArray>(this: T): number {
  const { length: l1 } = this;
  let max: number = Number.NEGATIVE_INFINITY;

  try {
    if (!['float32', 'float64'].includes(this.dtype)) {
      this.dtype = 'float32';
      this.data = get_type(this.dtype).from(this.data);
    }

    const { data: d1 } = this;
    if (this.dtype === 'float64') {
      max = d1[nblas.idamax(l1, d1, 1)];
    }

    if (this.dtype === 'float32') {
      max = d1[nblas.isamax(l1, d1, 1)];
    }
  } catch (err) {
    const { data: d1 } = this;
    const iter = new NDIter(this);

    do {
      const value = d1[iter.pos];
      if (max < value) {
        max = value;
      }

      iter.next();
    } while (!iter.done());
  }

  return max;
};
