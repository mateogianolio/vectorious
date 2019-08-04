import { NDArray } from './';

let nblas: any;
try {
  nblas = require('nblas');
} catch (err) {}

/**
 * Multiplies all elements of `x` with a specified `scalar`.
 */
NDArray.scale = <T extends NDArray>(x: T, scalar: number): T => x.copy().scale(scalar);

/**
 * Multiplies all elements of current array with a specified `scalar`.
 */
NDArray.prototype.scale = function<T extends NDArray>(this: T, scalar: number): T {
  const { data } = this;

  try {
    nblas.scal(data, scalar);
  } catch (err) {
    const { length } = this;

    let i: number;
    for (i = 0; i < length; i += 1) {
      data[i] *= scalar;
    }
  }

  return this;
};
