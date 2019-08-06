import { get_type } from '../util';

import { NDArray } from './';

let nblas: any;
try {
  nblas = require('nblas');
} catch (err) {}

NDArray.scale = <T extends NDArray>(x: T, scalar: number): T => x.copy().scale(scalar);

NDArray.prototype.scale = function<T extends NDArray>(this: T, scalar: number): T {
  const { length: l1 } = this;

  try {
    if (!['float32', 'float64'].includes(this.dtype)) {
      this.dtype = 'float32';
      this.data = get_type(this.dtype).from(this.data);
    }

    if (this.dtype === 'float64') {
      nblas.dscal(l1, scalar, this.data, 1);
    } else if (this.dtype === 'float32') {
      nblas.sscal(l1, scalar, this.data, 1);
    }
  } catch (err) {
    let i: number;
    for (i = 0; i < l1; i += 1) {
      this.set(i, this.get(i) * scalar);
    }
  }

  return this;
};
