import {
  deepStrictEqual,
  throws,
} from 'assert';

import { Matrix } from './';

describe('(Matrix) eig', () => {
  it('should throw error if matrix is not square', () => {
    const x: Matrix = new Matrix([[1, 2]]);

    throws(() => { x.eig(); }, Error);
  });

  it('should work as expected', () => {
    const x: Matrix = new Matrix([
      [1, 0, 0],
      [0, 2, 0],
      [0, 0, 3],
    ]);
    const y: Matrix = new Matrix([1, 2, 3]);
    const z: Matrix = new Matrix([
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ]);

    const [w, v] = x.eig();

    deepStrictEqual(y, w);
    deepStrictEqual(z, v);
  });

  it('should work as the static equivalent', () => {
    const x: Matrix = new Matrix([
      [1, 0, 0],
      [0, 2, 0],
      [0, 0, 3],
    ]);

    deepStrictEqual(x.copy().eig(), Matrix.eig(x));
  });
});
