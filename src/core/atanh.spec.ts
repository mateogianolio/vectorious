import {
  deepStrictEqual,
} from 'assert';

import v = require('..');

describe('(v) atanh', () => {
  it('should work as expected', () => {
    const x: v = v.random(3);

    deepStrictEqual(v.map(x, (value: number) => Math.atanh(value)), x.atanh());
  });

  it('should work as the static equivalent', () => {
    const x: v = v.random(3);

    deepStrictEqual(v.map(x, (value: number) => Math.atanh(value)), v.atanh(x));
  });
});
