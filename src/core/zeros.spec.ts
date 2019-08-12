import {
  deepStrictEqual,
} from 'assert';

import v = require('..');

describe('(v) zeros', () => {
  it('should work as expected', () => {
    const x: v = v.array([0, 0, 0]);

    deepStrictEqual(x, v.zeros(3));
  });

  it('should work as expected in two dimensions', () => {
    const x: v = v.array([[0, 0], [0, 0]]);

    deepStrictEqual(x, v.zeros(2, 2));
  });
});
