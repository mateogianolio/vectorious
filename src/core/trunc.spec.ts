import {
  deepStrictEqual,
} from 'assert';

import v = require('..');

describe('(v) trunc', () => {
  it('should work as expected', () => {
    const x: v = v.random(3);

    deepStrictEqual(v.map(x, (value: number) => Math.trunc(value)), x.trunc());
  });

  it('should work as the static equivalent', () => {
    const x: v = v.random(3);

    deepStrictEqual(v.map(x, (value: number) => Math.trunc(value)), v.trunc(x));
  });
});
