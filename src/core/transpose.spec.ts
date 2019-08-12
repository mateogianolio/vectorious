import {
  deepStrictEqual,
} from 'assert';

import v = require('..');

describe('(v) transpose', () => {
  it('should work as expected', () => {
    const x: v = v.array([[1, 2, 3]]);
    const y: v = v.array([[1], [2], [3]]);

    deepStrictEqual(x, y.copy().T);
    deepStrictEqual(y, x.copy().T);
  });

  it('should work as expected', () => {
    const x: v = v.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    const y: v = v.array([[1, 4, 7], [2, 5, 8], [3, 6, 9]]);

    deepStrictEqual(x, y.copy().T);
    deepStrictEqual(y, x.copy().T);
  });

  it('should work as expected', () => {
    const x: v = v.random(2, 2);
    const y: v = x.copy().T.T;

    deepStrictEqual(x, y);
  });

  it('should work as the static equivalent', () => {
    const x: v = v.array([[1, 1, 1]]);

    deepStrictEqual(x.copy().T, v.transpose(x));
  });
});
