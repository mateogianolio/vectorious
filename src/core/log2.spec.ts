import {
  deepStrictEqual,
} from 'assert';

import v = require('..');

describe('(v) log2', () => {
  it('should work as expected', () => {
    const x: v = v.random(3);

    deepStrictEqual(x.map((value: number) => Math.log2(value)), x.log2());
  });

  it('should work as the static equivalent', () => {
    const x: v = v.random(3);

    deepStrictEqual(x.map((value: number) => Math.log2(value)), v.log2(x));
  });
});
