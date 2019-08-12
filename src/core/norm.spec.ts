import {
  strictEqual,
} from 'assert';

import v = require('..');

describe('(v) norm', () => {
  it('should return 0 if empty vector', () => {
    strictEqual(0, v.array().norm());
  });

  it('should work as expected', () => {
    strictEqual(4, v.array([1, 1, 1, 2, 3]).norm());
  });

  it('should work as the static equivalent', () => {
    strictEqual(4, v.norm(v.array([1, 1, 1, 2, 3])));
  });
});
