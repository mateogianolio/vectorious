import {
  deepStrictEqual,
} from 'assert';

import v = require('..');

describe('(v) eye', () => {
  it('should work as expected', () => {
    const x: v = v.array([[1, 0, 0], [0, 1, 0], [0, 0, 1]]);

    deepStrictEqual(x, v.eye(3));
  });
});
