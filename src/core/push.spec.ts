import {
  deepStrictEqual,
} from 'assert';

import v = require('..');

describe('(v) push', () => {
  it('should start with v(1, 2), push(3) to get v(1, 2, 3)', () => {
    deepStrictEqual(v.array([1, 2, 3]), v.array([1, 2]).push(3));
  });

  it('should work as the static equivalent', () => {
    deepStrictEqual(v.array([1, 2, 3]), v.push(v.array([1, 2]), 3));
  });
});
