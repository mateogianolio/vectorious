import { copy } from '../NDArray/copy';
import { eye } from '../NDArray/eye';
import { INDArray, TypedArray } from '../types';

import { augment } from './augment';
import { gauss } from './gauss';
import { square } from './square';

/**
 * Determines the inverse of current matrix using
 * Gaussian elimination.
 */
export function inverse<T extends INDArray>(this: T): T {
  square.call(this);

  const [r, c] = this.shape;
  const { data: d1, length: l1 } = this;

  augment.call(this, eye.call(copy.call(this), r));
  console.log(d1, this.data);
  gauss.call(this);

  const d2: TypedArray = new this.type(l1);

  let i: number;
  let j: number;
  for (i = 0; i < r; i += 1) {
    for (j = 0; j < c; j += 1) {
      d2[i * c + j] = d1[i * c + j];
    }
  }

  d1.set(d2);
  this.length = l1;
  this.shape = [r, c];

  return this;
}
