import {
  strictEqual,
} from 'assert';

import v = require('..');

describe('(v) trace', () => {
  it('should work as expected', () => {
    const x: v = v.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    const y: v = v.array([[1, 2], [3, 4]]);

    strictEqual(15, x.trace());
    strictEqual(5, y.trace());
  });

  it('should work as the static equivalent', () => {
    const x: v = v.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    const y: v = v.array([[1, 2], [3, 4]]);

    strictEqual(15, v.trace(x));
    strictEqual(5, v.trace(y));
  });
});
