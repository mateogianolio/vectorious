import {
  deepStrictEqual,
  throws,
} from 'assert';

import { Matrix } from './';

describe('(Matrix) augment', () => {
  it('should return current matrix when combined with empty matrix', () => {
    const x: Matrix = new Matrix([[1, 2], [3, 4]]);

    deepStrictEqual(x, x.augment(new Matrix()));
  });

  it('should work as expected', () => {
    const x: Matrix = new Matrix([[1, 2], [3, 4]]);
    const y: Matrix = new Matrix([[5, 6], [7, 8]]);
    const z: Matrix = new Matrix([[1, 2, 5, 6], [3, 4, 7, 8]]);

    deepStrictEqual(z, x.augment(y));
  });

  it('should throw error when rows do not match', () => {
    const x: Matrix = new Matrix([[1, 2], [3, 4]]);

    throws(() => { x.augment(new Matrix([[1]])); }, Error);
  });

  it('should work as the static equivalent', () => {
    const x: Matrix = new Matrix([[1, 1, 1]]);
    const y: Matrix = new Matrix([[1, 2, 3]]);

    deepStrictEqual(x.copy().augment(y), Matrix.augment(x, y));
  });
});
