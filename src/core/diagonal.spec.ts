import {
  deepStrictEqual,
} from 'assert';

import v = require('..');

describe('(v) diagonal', () => {
  it('should work as expected', () => {
    const x: v = v.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);

    deepStrictEqual(v.array([1, 5, 9]), x.diagonal());
  });

  it('should work as the static equivalent', () => {
    const x: v = v.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);

    deepStrictEqual(x.copy().diagonal(), v.diagonal(x));
  });
});
