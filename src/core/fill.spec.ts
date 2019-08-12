import {
  deepStrictEqual,
} from 'assert';

import v = require('..');

describe('(v) fill', () => {
  it('should work as expected', () => {
    const x: v = v.array([1, 1, 1]);
    const y: v = v.array([0, 0, 0]);

    deepStrictEqual(x, y.fill(1));
  });

  it('should work as expected with function argument', () => {
    const x: v = v.array([0, 1, 2]);
    const y: v = v.array([0, 0, 0]);

    deepStrictEqual(x, y.fill((index: number) => index));
  });

  it('should work as the static equivalent', () => {
    const x: v = v.array([1, 1, 1]);
    const y: v = v.array([0, 0, 0]);

    deepStrictEqual(x, v.fill(y, 1));
  });
});
