import {
  strictEqual,
} from 'assert';

import v = require('..');

describe('(v) angle', () => {
  it('should work as expected', () => {
    const x: v = v.array([1, 0]);
    const y: v = v.array([0, 1]);

    strictEqual(Math.PI / 2, x.angle(y));
  });

  it('should work as the static equivalent', () => {
    const x: v = v.array([1, 0]);
    const y: v = v.array([0, 1]);

    strictEqual(Math.PI / 2, v.angle(x, y));
  });
});
