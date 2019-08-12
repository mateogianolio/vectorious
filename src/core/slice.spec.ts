import {
  deepStrictEqual,
} from 'assert';

import v = require('..');

describe('(v) slice', () => {
  it('should work as expected', () => {
    const x: v = v.array([-1, -2, 3, 4]);

    deepStrictEqual(v.array([-1, 3]), x.slice(0, 4, 2));
  });

  it('should work as expected', () => {
    const x: v = v.array([-1, -2, 3, 4]);

    deepStrictEqual(v.array([-2, 3]), x.slice(1, 3));
  });

  it('should work as the static equivalent', () => {
    const x: v = v.array([-1, -2, 3, 4]);

    deepStrictEqual(v.array([-1, 3]), v.slice(x, 0, 4, 2));
  });
});
