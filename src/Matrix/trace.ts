import { Matrix } from './';

/**
 * Gets the trace of the matrix (the sum of all diagonal elements).
 */
Matrix.trace = <T extends Matrix>(x: T): number => x.trace();

/**
 * Gets the trace of the matrix (the sum of all diagonal elements).
 */
Matrix.prototype.trace = function<T extends Matrix>(this: T): number {
  const { data: d1 } = this;
  const c: number = this.shape[1];

  let result: number = 0;

  let j: number;
  for (j = 0; j < c; j += 1) {
    result += d1[j * c + j];
  }

  return result;
};
