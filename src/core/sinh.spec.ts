import {
  deepStrictEqual,
} from 'assert';

import v = require('..');

describe('(v) sinh', () => {
  it('should work as expected', () => {
    const x: v = v.random(3);

    deepStrictEqual(v.map(x, (value: number) => Math.sinh(value)), x.sinh());
  });

  it('should work as the static equivalent', () => {
    const x: v = v.random(3);

    deepStrictEqual(v.map(x, (value: number) => Math.sinh(value)), v.sinh(x));
  });
});
