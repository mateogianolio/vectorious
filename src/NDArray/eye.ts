import { TypedArray } from '../types';

import { NDArray } from './';

/**
 * Creates an identity matrix of size `n` and type `type`.
 */
NDArray.eye = function<T extends NDArray>(this: new(...args: any[]) => T, n: number): T {
  const l1: number = n * n;
  const d1: TypedArray = new Float32Array(l1);

  let i: number;
  let j: number;
  for (i = 0; i < n; i += 1) {
    for (j = 0; j < n; j += 1) {
      d1[i * n + j] = i === j ? 1 : 0;
    }
  }

  return new this(d1, { shape: [n, n] });
};
