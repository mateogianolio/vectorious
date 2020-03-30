import {
  deepStrictEqual,
} from 'assert';

import v = require('..');

describe('(v) log10', () => {
  it('should work as expected', () => {
    const x: v = v.random(3);

    deepStrictEqual(v.map(x, (value: number) => Math.log10(value)), x.log10());
  });

  it('should work as the static equivalent', () => {
    const x: v = v.random(3);

    deepStrictEqual(v.map(x, (value: number) => Math.log10(value)), v.log10(x));
  });
});
