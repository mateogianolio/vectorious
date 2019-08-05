import {
  deepStrictEqual,
} from 'assert';

import { Matrix } from './';

describe('solve', () => {
  it('should work as expected', () => {
    const x: Matrix = new Matrix([[1, 3, 5], [2, 4, 7], [1, 1, 0]]);
    const y: Matrix = new Matrix([[1], [3], [5]]);
    const z: Matrix = new Matrix([[3.25], [1.75], [-1.5]]);

    deepStrictEqual(z, x.solve(y));
  });

  it('should work as the static equivalent', () => {
    const x: Matrix = new Matrix([[1, 3, 5], [2, 4, 7], [1, 1, 0]]);
    const y: Matrix = new Matrix([[1], [3], [5]]);
    const z: Matrix = new Matrix([[3.25], [1.75], [-1.5]]);

    deepStrictEqual(z, Matrix.solve(x, y));
  });
});
