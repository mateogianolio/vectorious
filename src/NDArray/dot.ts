import { NDArray } from './';

let nblas: any;
try {
  nblas = require('nblas');
} catch (err) {}

/**
 * Performs dot multiplication with `x` and `y`
 */
NDArray.dot = <T extends NDArray>(x: T, y: T): number => x.dot(y);

/**
 * Performs dot multiplication with `x` and current array
 */
NDArray.prototype.dot = function<T extends NDArray>(this: T, x: T): number {
  this.equilateral(x);
  this.equidimensional(x);

  const { data: d1, length: l1 } = this;
  const { data: d2 } = x;

  try {
    return nblas.dot(d1, d2);
  } catch (err) {
    let result: number = 0;

    let i: number;
    for (i = 0; i < l1; i += 1) {
      result += d1[i] * d2[i];
    }

    return result;
  }
};
