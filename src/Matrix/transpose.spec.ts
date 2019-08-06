import {
  deepStrictEqual,
} from 'assert';

import { Matrix } from './';

describe('(Matrix) transpose', () => {
  it('should work as expected', () => {
    const x: Matrix = new Matrix([[1, 2]]);
    const y: Matrix = new Matrix([[1], [2]]);

    deepStrictEqual(x, y.copy().T);
    deepStrictEqual(y, x.copy().T);
  });

  it('should work as expected', () => {
    const x: Matrix = new Matrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    const y: Matrix = new Matrix([[1, 4, 7], [2, 5, 8], [3, 6, 9]]);

    deepStrictEqual(x, y.copy().T);
    deepStrictEqual(y, x.copy().T);
  });

  it('should work as expected', () => {
    const x: Matrix = Matrix.random<Matrix>(2, 2);
    const y: Matrix = x.copy().T.T;

    deepStrictEqual(x, y);
  });

  it('should work as the static equivalent', () => {
    const x: Matrix = new Matrix([[1, 1, 1]]);

    deepStrictEqual(x.copy().T, Matrix.transpose(x));
  });
});
