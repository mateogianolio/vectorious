import {
  deepStrictEqual,
} from 'assert';

import v = require('..');

describe('(v) scale', () => {
  it('should scale v(1, 2, 3) by 2 to v(2, 4, 6)', () => {
    const x: v = v.array([1, 2, 3]);
    const y: v = v.array([2, 4, 6]);

    deepStrictEqual(y, x.scale(2));
  });

  it('should work as the static equivalent', () => {
    const x: v = v.array([1, 2, 3]);
    const y: v = v.array([2, 4, 6]);

    deepStrictEqual(y, v.scale(x, 2));
  });
});
