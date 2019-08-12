import {
  strictEqual,
} from 'assert';

import v = require('..');

describe('(v) equals', () => {
  it('should work as expected', () => {
    strictEqual(true, v.array([1, 3, 2]).equals(v.array([1, 3, 2])));
    strictEqual(true, v.array().equals(v.array()));
    strictEqual(false, v.array([1, 2, 3]).equals(v.array([1, 3, 2])));
  });

  it('should work as the static equivalent', () => {
    strictEqual(true, v.equals(v.array([1, 3, 2]), v.array([1, 3, 2])));
    strictEqual(true, v.equals(v.array(), v.array()));
    strictEqual(false, v.equals(v.array([1, 2, 3]), v.array([1, 3, 2])));
  });
});
