import { NDArray } from './';

let nblas: any;
try {
  nblas = require('nblas');
} catch (err) {}

NDArray.dot = <T extends NDArray>(x: T, y: T): number => x.dot(y);

NDArray.prototype.dot = function<T extends NDArray>(this: T, x: T): number {
  this.equilateral(x);
  this.equidimensional(x);

  const { length: l1 } = this;
  let result: number = 0;

  try {
    if (!(this.data instanceof Float64Array) || !(this.data instanceof Float32Array)) {
      this.type = Float32Array;
      this.data = Float32Array.from(this.data);
    }

    if (this.data instanceof Float64Array) {
      result = nblas.ddot(l1, x.data, 1, this.data, 1);
    }

    if (this.data instanceof Float32Array) {
      result = nblas.sdot(l1, x.data, 1, this.data, 1);
    }
  } catch (err) {
    let i: number;
    for (i = 0; i < l1; i += 1) {
      result += this.get(i) * x.get(i);
    }
  }

  return result;
};
