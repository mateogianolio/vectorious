import { INDArray } from '../types';

let nblas: any;
try {
  nblas = require('nblas');
} catch (err) {}

/**
 * Multiplies all elements of current array with a specified `scalar`.
 */
export default function scale<T extends INDArray<T>>(this: T, scalar: number): T {
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
