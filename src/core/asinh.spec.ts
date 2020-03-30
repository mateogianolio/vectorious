import {
  deepStrictEqual,
} from 'assert';

import v = require('..');

describe('(v) asinh', () => {
  it('should work as expected', () => {
    const x: v = v.random(3);

    deepStrictEqual(v.map(x, (value: number) => Math.asinh(value)), x.asinh());
  });

  it('should work as the static equivalent', () => {
    const x: v = v.random(3);

    deepStrictEqual(v.map(x, (value: number) => Math.asinh(value)), v.asinh(x));
  });
});
