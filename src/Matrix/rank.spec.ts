import {
  deepStrictEqual,
  strictEqual,
} from 'assert';

import { Matrix } from './';

describe('rank', () => {
  it('should work as expected', () => {
    const x: Matrix = new Matrix([[1, 2, 1], [-2, -3, 1], [3, 5, 0]]);
    const y: Matrix = new Matrix([[1, 1, 1], [2, 2, 2], [3, 3, 3]]);
    const z: Matrix = new Matrix([[0, 0, 0], [0, 0, 0]]);

    strictEqual(x.rank(), 2);
    strictEqual(y.rank(), 1);
    strictEqual(z.rank(), 0);
  });

  it('should work as the static equivalent', () => {
    const x: Matrix = new Matrix([[1, 1, 1]]);

    deepStrictEqual(x.copy().rank(), Matrix.rank(x));
  });
});
