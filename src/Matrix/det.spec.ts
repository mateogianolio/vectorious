import {
  deepStrictEqual,
  strictEqual,
  throws,
} from 'assert';

import { Matrix } from './';

describe('(Matrix) det', () => {
  it('should throw error if matrix is not square', () => {
    const x: Matrix = new Matrix([[0, 0]]);
    throws(() => { x.det(); }, Error);
  });

  it('should work as expected', () => {
    const x: Matrix = new Matrix([[1, 2], [3, 4]]);
    const y: Matrix = new Matrix([[1, 5, 6], [3.3, 9, 10], [7, 9, 3.2]]);
    const z: Matrix = new Matrix([[2, -1, 1], [-1, -2, 1], [-1, -1, -1]]);

    strictEqual(-2, Number(x.det().toFixed(2)));
    strictEqual(36.2, Number(y.det().toFixed(2)));
    strictEqual(7, Number(z.det().toFixed(2)));
  });

  it('should work as the static equivalent', () => {
    const x: Matrix = new Matrix([[1, 2], [3, 4]]);

    deepStrictEqual(x.copy().det(), Matrix.det(x));
  });
});
