import {
  deepStrictEqual,
} from 'assert';

import v = require('..');

describe('(v) combine', () => {
  it('should return current vector if combined with empty vector', () => {
    deepStrictEqual(v.array([1, 2, 3]), v.array([1, 2, 3]).combine(v.array()));
  });

  it('should work as expected', () => {
    deepStrictEqual(v.array([1, 2, 3, 0, 1]), v.array([1, 2, 3]).combine(v.array([0, 1])));
  });

  it('should work as the static equivalent', () => {
    deepStrictEqual(v.array([1, 2, 3, 0, 1]), v.combine(v.array([1, 2, 3]), v.array([0, 1])));
  });
});
