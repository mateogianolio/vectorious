import {
  deepStrictEqual,
} from 'assert';

import v = require('..');

describe('(v) expm1', () => {
  it('should work as expected', () => {
    const x: v = v.random(3);

    deepStrictEqual(v.map(x, (value: number) => Math.expm1(value)), x.expm1());
  });

  it('should work as the static equivalent', () => {
    const x: v = v.random(3);

    deepStrictEqual(v.map(x, (value: number) => Math.expm1(value)), v.expm1(x));
  });
});
