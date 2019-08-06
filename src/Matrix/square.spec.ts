import {
  throws,
} from 'assert';

import { Matrix } from './';

describe('(Matrix) square', () => {
  it('should throw error if matrix is not square', () => {
    const x: Matrix = new Matrix([[0, 0]]);
    throws(() => { x.square(); }, Error);
  });

  it('should work as the static equivalent', () => {
    const x: Matrix = new Matrix([[0, 0]]);
    throws(() => { Matrix.square(x); }, Error);
  });
});
