import {
  deepStrictEqual,
} from 'assert';

import v = require('..');

describe('(v) abs', () => {
  it('should work as expected', () => {
    const x: v = v.random(3).scale(-1);

    deepStrictEqual(v.map(x, (value: number) => Math.abs(value)), x.abs());
  });

  it('should work as the static equivalent', () => {
    const x: v = v.random(3, 3);

    deepStrictEqual(v.map(x, (value: number) => Math.abs(value)), v.abs(x));
  });
});
