import {
  deepStrictEqual,
} from 'assert';

import v = require('..');

describe('(v) range', () => {
  it('should work as expected', () => {
    const x: v = v.array([0, 1, 2]);

    deepStrictEqual(x, v.range(0, 3));
  });

  it('should work as expected', () => {
    const x: v = v.array([2, 1, 0]);

    deepStrictEqual(x, v.range(2, -1));
  });

  it('should work as expected', () => {
    const x: v = v.array([0, 0.5, 1, 1.5]);

    deepStrictEqual(x, v.range(0, 0.5, 2));
  });
});
