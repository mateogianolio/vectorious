import { INDArray } from '../types';

let nblas: any;
try {
  nblas = require('nblas');
} catch (err) {}

/**
 * Adds `x` multiplied by `alpha` to the current array.
 */
export default function add<T extends INDArray<T>>(this: T, x: T, alpha: number = 1): T {
  this.equilateral(x);
  this.equidimensional(x);

  try {
    nblas.axpy(x.data, this.data, alpha);
  } catch (err) {
    const { data: d1, length: l1 } = this;
    const { data: d2} = x;

    let i: number;
    for (i = 0; i < l1; i += 1) {
      d1[i] += alpha * d2[i];
    }

  }

  return this;
};
