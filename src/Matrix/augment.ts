import { TypedArray } from '../types';

import { Matrix } from './';

/**
 * Augments `x` and `y`.
 */
Matrix.augment = <T extends Matrix>(x: T, y: T): T => x.copy().augment(y);

/**
 * Augments `x` with current matrix.
 */
Matrix.prototype.augment = function<T extends Matrix>(this: T, x: T): T {
  const [r1, c1] = this.shape;
  const [r2, c2] = x.shape;

  if (r2 === 0 || c2 === 0) {
    return this;
  }

  if (r1 !== r2) {
    throw new Error('rows do not match');
  }

  const { data: d1 } = this;
  const { data: d2 } = x;
  const c3: number = c1 + c2;
  const d3: TypedArray = new this.type(r1 * c3);

  let i: number;
  let j: number;
  for (i = 0; i < r1; i += 1) {
    for (j = 0; j < c1; j += 1) {
      d3[i * c3 + j] = d1[i * c1 + j];
    }
  }

  for (i = 0; i < r2; i += 1) {
    for (j = 0; j < c2; j += 1) {
      d3[i * c3 + j + c1] = d2[i * c2 + j];
    }
  }

  this.shape = [r1, c3];
  this.length = d3.length;
  this.data = d3;

  return this;
};
