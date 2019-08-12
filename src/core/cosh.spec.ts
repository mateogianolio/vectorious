import {
  deepStrictEqual,
} from 'assert';

import v = require('..');

describe('(v) cosh', () => {
  it('should work as expected', () => {
    const x: v = v.random(3);

    deepStrictEqual(x.map((value: number) => Math.cosh(value)), x.cosh());
  });

  it('should work as the static equivalent', () => {
    const x: v = v.random(3);

    deepStrictEqual(x.map((value: number) => Math.cosh(value)), v.cosh(x));
  });
});
