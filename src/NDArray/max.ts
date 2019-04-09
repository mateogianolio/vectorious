import { INDArray } from '../types';

let nblas: any;
try {
  nblas = require('nblas');
} catch (err) {}

/**
 * Gets the maximum value (largest) element of current array.
 */
export function max<T extends INDArray<T>>(this: T): number {
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
