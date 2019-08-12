import {
  strictEqual,
} from 'assert';

import v = require('..');

describe('(v) max', () => {
  it('should find the maximum number in arrays', () => {
    const x: v = v.array([1, 2, 3]);
    const y: v = v.array([3, -1, 1]);
    const z: v = v.array([2, 5, 1]);

    strictEqual(3, x.max());
    strictEqual(3, y.max());
    strictEqual(5, z.max());
  });

  it('should work as the static equivalent', () => {
    const x: v = v.array([1, 2, 3]);
    const y: v = v.array([3, -1, 1]);
    const z: v = v.array([2, 5, 1]);

    strictEqual(3, v.max(x));
    strictEqual(3, v.max(y));
    strictEqual(5, v.max(z));
  });
});
