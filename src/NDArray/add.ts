import { NDArray } from '../NDArray';

let nblas: any;
try {
  nblas = require('nblas');
} catch (err) {}

/**
 * Adds `y` multiplied by `alpha` to `x`
 */
NDArray.add = <T extends NDArray>(x: T, y: T, alpha: number = 1): T => x.copy().add(y, alpha);

/**
 * Adds `x` multiplied by `alpha` to the current array
 */
NDArray.prototype.add = function<T extends NDArray>(this: T, x: NDArray, alpha: number = 1): T {
  this.equilateral(x);
  this.equidimensional(x);

  const { data: d1, length: l1 } = this;
  const { data: d2 } = x;

  try {
    nblas.axpy(d2, d1, alpha);
  } catch (err) {
    let i: number;
    for (i = 0; i < l1; i += 1) {
      d1[i] += alpha * d2[i];
    }
  }

  return this;
};
