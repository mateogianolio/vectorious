import {
  deepStrictEqual,
} from 'assert';

import { Matrix } from './';

describe('(Matrix) rowAdd', () => {
  it('should work as expected', () => {
    const x: Matrix = new Matrix([[1, 2], [3, 4]]);
    const y: Matrix = new Matrix([[31, 42], [3, 4]]);

    x.rowAdd(0, 1, 10);

    deepStrictEqual(y, x);
  });

  it('should work as the static equivalent', () => {
    const x: Matrix = new Matrix([[1, 2], [3, 4]]);
    const y: Matrix = new Matrix([[31, 42], [3, 4]]);

    deepStrictEqual(y, Matrix.rowAdd(x, 0, 1, 10));
  });
});
