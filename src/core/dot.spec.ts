import {
  strictEqual,
  throws,
} from 'assert';

import v = require('..');

describe('(v) dot', () => {
  it('should throw error if sizes do not match', () => {
    const x: v = v.array([1]);
    const y: v = v.array([1, 2]);

    throws(() => { x.dot(y); }, Error);
  });

  it('should work as expected', () => {
    const x: v = v.array([1, 2, 3]);
    const y: v = v.array([4, 5, 6]);

    strictEqual(32, x.dot(y));
  });

  it('should work as the static equivalent', () => {
    const x: v = v.array([1, 2, 3]);
    const y: v = v.array([4, 5, 6]);

    strictEqual(32, v.dot(x, y));
  });
});
