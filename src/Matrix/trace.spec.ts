import {
  strictEqual,
} from 'assert';

import { Matrix } from './';

describe('trace', () => {
  it('should work as expected', () => {
    const x: Matrix = new Matrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    const y: Matrix = new Matrix([[1, 2], [3, 4]]);

    strictEqual(15, x.trace());
    strictEqual(5, y.trace());
  });

  it('should work as the static equivalent', () => {
    const x: Matrix = new Matrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    const y: Matrix = new Matrix([[1, 2], [3, 4]]);

    strictEqual(15, Matrix.trace(x));
    strictEqual(5, Matrix.trace(y));
  });
});
