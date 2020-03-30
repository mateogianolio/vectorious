import {
  deepStrictEqual,
} from 'assert';

import v = require('..');

describe('(v) acosh', () => {
  it('should work as expected', () => {
    const x: v = v.random(3).add(v.ones(3));

    deepStrictEqual(v.map(x, (value: number) => Math.acosh(value)), x.acosh());
  });

  it('should work as the static equivalent', () => {
    const x: v = v.random(3).add(v.ones(3));

    deepStrictEqual(v.map(x, (value: number) => Math.acosh(value)), v.acosh(x));
  });
});
