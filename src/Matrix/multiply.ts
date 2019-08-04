import { TypedArray } from '../types';

import { Matrix } from './';

let nblas: any;
try {
  nblas = require('nblas');
} catch (err) {}

/**
 * Multiplies two matrices `x` and `y` of matching dimensions.
 */
Matrix.multiply = <T extends Matrix>(x: T, y: T): T => x.multiply(y);

/**
 * Multiplies two matrices `x` and `y` of matching dimensions.
 */
Matrix.prototype.multiply = function<T extends Matrix>(this: T, x: T): T {
  const [r1, c1] = this.shape;
  const [r2, c2] = x.shape;

  if (c1 !== r2) {
    throw new Error('sizes do not match');
  }

  const { data: d1 } = this;
  const { data: d2 } = x;

  const l3: number = r1 * c2;
  const d3: TypedArray = new this.type(l3);

  try {
    nblas.gemm(d1, d2, d3, r1, c2, c1);
  } catch (err) {
    let i: number;
    let j: number;
    let k: number;
    let sum: number;
    for (i = 0; i < r1; i += 1) {
      for (j = 0; j < c2; j += 1) {
        sum = 0;
        for (k = 0; k < c1; k += 1) {
          sum += d1[i * c1 + k] * d2[j + k * c2];
        }

        d3[i * c2 + j] = sum;
      }
    }
  }

  this.data = d3;
  this.length = l3;
  this.shape = [r1, c2];

  return this;
};
