import {
  deepStrictEqual,
} from 'assert';

import v = require('..');

describe('(v) row_add', () => {
  it('should work as expected', () => {
    const x: v = v.array([[1, 2], [3, 4]]);
    const y: v = v.array([[31, 42], [3, 4]]);

    x.row_add(0, 1, 10);

    deepStrictEqual(y, x);
  });

  it('should work as the static equivalent', () => {
    const x: v = v.array([[1, 2], [3, 4]]);
    const y: v = v.array([[31, 42], [3, 4]]);

    deepStrictEqual(y, v.row_add(x, 0, 1, 10));
  });
});
