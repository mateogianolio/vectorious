import {
  deepStrictEqual,
} from 'assert';

import v = require('..');

describe('(v) lu_factor', () => {
  it('should work as expected', () => {
    const x: v = v.array([[1, 3, 5], [2, 4, 7], [1, 1, 0]]);
    const y: v = v.array([[2, 4, 7], [0.5, 1, 1.5], [0.5, -1, -2]]);
    const ipiv: Int32Array = new Int32Array([2, 2, 3]);

    const [LU, piv] = x.lu_factor();
    deepStrictEqual(ipiv, piv);
    deepStrictEqual(y, LU);
  });

  it('should work as the static equivalent', () => {
    const x: v = v.array([[1, 3, 5], [2, 4, 7], [1, 1, 0]]);

    deepStrictEqual(x.copy().lu_factor(), v.lu_factor(x));
  });
});
