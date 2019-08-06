import {
  deepStrictEqual,
} from 'assert';

import { Matrix } from './';

describe('(Matrix) diagonal', () => {
  it('should work as expected', () => {
    const x: Matrix = new Matrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);

    deepStrictEqual(new Matrix([1, 5, 9]), x.diagonal());
  });

  it('should work as the static equivalent', () => {
    const x: Matrix = new Matrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);

    deepStrictEqual(x.copy().diagonal(), Matrix.diagonal(x));
  });
});
