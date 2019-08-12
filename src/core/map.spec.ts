import {
  deepStrictEqual,
} from 'assert';

import v = require('..');

describe('(v) map', () => {
  it('should work as expected', () => {
    const x: v = v.array([1, 2, 3]);

    deepStrictEqual(v.array([1, 4, 9]), x.map((value: number) => value * value));
  });

  it('should work as the static equivalent', () => {
    const x: v = v.array([1, 2, 3]);

    deepStrictEqual(v.array([1, 4, 9]), v.map(x, (value: number) => value * value));
  });
});
