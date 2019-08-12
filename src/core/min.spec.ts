import {
  strictEqual,
} from 'assert';

import v = require('..');

describe('(v) min', () => {
  it('should find the minimum number in arrays', () => {
    const x: v = v.array([1, 2, 3]);
    const y: v = v.array([3, -1, 1]);
    const z: v = v.array([2, 5, 1]);

    strictEqual(1, x.min());
    strictEqual(-1, y.min());
    strictEqual(1, z.min());
  });

  it('should work as the static equivalent', () => {
    const x: v = v.array([1, 2, 3]);
    const y: v = v.array([3, -1, 1]);
    const z: v = v.array([2, 5, 1]);

    strictEqual(1, v.min(x));
    strictEqual(-1, v.min(y));
    strictEqual(1, v.min(z));
  });
});
