import { INDArray } from '../types';

let nblas: any;
try {
  nblas = require('nblas');
} catch (err) {}

/**
 * Performs dot multiplication with `x`
 */
export default function dot<T extends INDArray<T>>(this: T, x: T): number {
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
