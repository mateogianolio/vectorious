import { INDArray } from '../types';

let nblas: any;
try {
  nblas = require('nblas');
} catch (err) {}

/**
 * Calculates the magnitude of an array (also called L2 norm or Euclidean length).
 */
export function magnitude<T extends INDArray<T>>(this: T): number {
  const { length } = this;
  if (length === 0) {
    return 0;
  }

  const { data } = this;
  try {
    return nblas.nrm2(data);
  } catch (err) {
    let result: number = 0;

    let i: number;
    for (i = 0; i < length; i += 1) {
      result += data[i] * data[i];
    }

    return Math.sqrt(result);
  }
};
