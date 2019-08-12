import {
  deepStrictEqual,
} from 'assert';

import v = require('..');

describe('(v) normalize', () => {
  it('should work as expected', () => {
    const x: v = v.array([1, 1]);
    const y: v = v.array([1 / Math.sqrt(2), 1 / Math.sqrt(2)]);

    deepStrictEqual(y, x.normalize());
  });

  it('should work as the static equivalent', () => {
    const x: v = v.array([1, 1]);
    const y: v = v.array([1 / Math.sqrt(2), 1 / Math.sqrt(2)]);

    deepStrictEqual(y, v.normalize(x));
  });
});
