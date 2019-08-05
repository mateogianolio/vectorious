import { NDArray } from './';

let nblas: any;
try {
  nblas = require('nblas');
} catch (err) {}

NDArray.norm = <T extends NDArray>(x: T): number => x.norm();

NDArray.prototype.norm = function<T extends NDArray>(this: T): number {
  const { length: l1 } = this;
  let result: number = 0;

  try {
    if (!(this.data instanceof Float64Array) || !(this.data instanceof Float32Array)) {
      this.type = Float32Array;
      this.data = Float32Array.from(this.data);
    }

    if (this.data instanceof Float64Array) {
      result = nblas.dnrm2(l1, this.data, 1);
    }

    if (this.data instanceof Float32Array) {
      result = nblas.snrm2(l1, this.data, 1);
    }
  } catch (err) {
    result = Math.sqrt(this.dot(this));
  }

  return result;
};
