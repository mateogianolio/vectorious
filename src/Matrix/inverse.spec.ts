import {
  deepStrictEqual,
  throws,
} from 'assert';

import { Matrix } from './';

describe('inverse', () => {
  it('should throw error if matrix is not square', () => {
    const x: Matrix = new Matrix([[1, 2]]);

    throws(() => { x.inverse(); }, Error);
  });

  it('should throw error if matrix is not invertible', () => {
    const x: Matrix = new Matrix([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]);

    throws(() => { x.inverse(); }, Error);
  });

  it('should work as expected', () => {
    const x: Matrix = new Matrix([
      [2, -1, 0],
      [-1, 2, -1],
      [0, -1, 2],
    ]);
    const y: Matrix = new Matrix([
      [3 / 4, 1 / 2, 1 / 4],
      [1 / 2, 1, 1 / 2],
      [1 / 4, 1 / 2, 3 / 4],
    ]);

    // Need to round result to avoid floating point rounding errors, e.g. 0.99999999994
    deepStrictEqual(y, x.inverse().map((value: number) => Number(value.toFixed(2))));
  });

  it('should work as the static equivalent', () => {
    const x: Matrix = new Matrix([
      [2, -1, 0],
      [-1, 2, -1],
      [0, -1, 2],
    ]);

    deepStrictEqual(x.copy().inverse(), Matrix.inverse(x));
  });
});
