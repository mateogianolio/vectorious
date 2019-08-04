import { NDArray } from './';

let nblas: any;
try {
  nblas = require('nblas');
} catch (err) {}

/**
 * Gets the maximum value (largest) element of `x`.
 */
NDArray.max = <T extends NDArray>(x: T): number => x.max();

/**
 * Gets the maximum value (largest) element of current array.
 */
NDArray.prototype.max = function<T extends NDArray>(this: T): number {
  const { data } = this;
  try {
    return data[nblas.iamax(data)];
  } catch (err) {
    const { length } = this;
    let result: number = Number.NEGATIVE_INFINITY;

    let i: number;
    for (i = 0; i < length; i += 1) {
      result = result < data[i] ? data[i] : result;
    }

    return result;
  }
};
