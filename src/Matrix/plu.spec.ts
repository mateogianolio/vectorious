import {
  deepStrictEqual,
} from 'assert';

import { Matrix } from './';

describe('plu', () => {
  it('should work as expected', () => {
    const x: Matrix = new Matrix([[1, 3, 5], [2, 4, 7], [1, 1, 0]]);
    const y: Matrix = new Matrix([[2, 4, 7], [0.5, 1, 1.5], [0.5, -1, -2]]);
    const ipiv: Int32Array = new Int32Array([1, 1, 2]);

    const plu: [Matrix, Int32Array] = x.plu();
    deepStrictEqual(ipiv, plu.pop());
    deepStrictEqual(y, plu.pop());
  });

  it('should work as the static equivalent', () => {
    const x: Matrix = new Matrix([[1, 3, 5], [2, 4, 7], [1, 1, 0]]);

    deepStrictEqual(x.copy().plu(), Matrix.plu(x));
  });
});
