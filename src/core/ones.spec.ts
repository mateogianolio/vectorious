import {
  deepStrictEqual,
} from 'assert';

import v = require('..');

describe('(v) ones', () => {
  it('should work as expected', () => {
    const x: v = v.array([1, 1, 1]);

    deepStrictEqual(x, v.ones(3));
  });

  it('should work as expected in two dimensions', () => {
    const x: v = v.array([[1, 1], [1, 1]]);

    deepStrictEqual(x, v.ones(2, 2));
  });
});
