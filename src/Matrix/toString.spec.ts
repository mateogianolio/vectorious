import {
  strictEqual,
} from 'assert';

import { Matrix } from './';

describe('(Matrix) toString', () => {
  it('should work as expected', () => {
    const x: Matrix = new Matrix([[1, 2], [3, 4]]);
    const y: Matrix = new Matrix([[1, 2], [3, 4], [5, 6]]);

    strictEqual('[[1,2], \n[3,4]]', x.toString());
    strictEqual('[[1,2], \n[3,4], \n[5,6]]', y.toString());
  });

  it('should work as the static equivalent', () => {
    const x: Matrix = new Matrix([[1, 2], [3, 4]]);

    strictEqual('[[1,2], \n[3,4]]', Matrix.toString(x));
  });
});
