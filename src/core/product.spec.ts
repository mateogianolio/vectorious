import {
  deepStrictEqual,
} from 'assert';

import v = require('..');

describe('(v) product', () => {
  it('should work as expected', () => {
    const x: v = v.array([[3, 2, 1]]);
    const y: v = v.array([[1, 2, 3]]);

    deepStrictEqual(v.array([[3, 4, 3]]), x.product(y));
  });

  it('should work as the static equivalent', () => {
    const x: v = v.array([[3, 2, 1]]);
    const y: v = v.array([[1, 2, 3]]);

    deepStrictEqual(v.array([[3, 4, 3]]), v.product(x, y));
  });
});
