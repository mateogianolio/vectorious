import { NDArray } from './';

let nblas: any;
try {
  nblas = require('nblas');
} catch (err) {}

NDArray.scale = <T extends NDArray>(x: T, scalar: number): T => x.copy().scale(scalar);

NDArray.prototype.scale = function<T extends NDArray>(this: T, scalar: number): T {
  const { length: l1 } = this;

  try {
    if (!(this.data instanceof Float64Array) || !(this.data instanceof Float32Array)) {
      this.type = Float32Array;
      this.data = Float32Array.from(this.data);
    }

    if (this.data instanceof Float64Array) {
      nblas.dscal(l1, scalar, this.data, 1);
    } else if (this.data instanceof Float32Array) {
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
