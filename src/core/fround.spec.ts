import {
  deepStrictEqual,
} from 'assert';

import v = require('..');

describe('(v) fround', () => {
  it('should work as expected', () => {
    const x: v = v.random(3);

    deepStrictEqual(x.map((value: number) => Math.fround(value)), x.fround());
  });

  it('should work as the static equivalent', () => {
    const x: v = v.random(3);

    deepStrictEqual(x.map((value: number) => Math.fround(value)), v.fround(x));
  });
});
