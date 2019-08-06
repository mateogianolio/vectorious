import { get_type } from '../util';

import { NDArray } from './';

let nblas: any;
try {
  nblas = require('nblas');
} catch (err) {}

NDArray.add = <T extends NDArray>(x: T, y: T, alpha: number = 1): T => x.copy().add(y, alpha);

NDArray.prototype.add = function<T extends NDArray>(this: T, x: NDArray, alpha: number = 1): T {
  this.equilateral(x);
  this.equidimensional(x);

  const { length: l1 } = this;

  try {
    if (!['float32', 'float64'].includes(this.dtype)) {
      this.dtype = 'float32';
      this.data = get_type(this.dtype).from(this.data);
    }

    if (this.dtype === 'float64') {
      nblas.daxpy(l1, alpha, x.data, 1, this.data, 1);
    } else if (this.dtype === 'float32') {
      nblas.sapxy(l1, alpha, x.data, 1, this.data, 1);
    }
  } catch (err) {
    let i: number;
    for (i = 0; i < l1; i += 1) {
      this.set(i, this.get(i) + alpha * x.get(i));
    }
  }

  return this;
};
