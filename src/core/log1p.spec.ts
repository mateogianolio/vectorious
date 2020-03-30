import {
  deepStrictEqual,
} from 'assert';

import v = require('..');

describe('(v) log1p', () => {
  it('should work as expected', () => {
    const x: v = v.random(3);

    deepStrictEqual(v.map(x, (value: number) => Math.log1p(value)), x.log1p());
  });

  it('should work as the static equivalent', () => {
    const x: v = v.random(3);

    deepStrictEqual(v.map(x, (value: number) => Math.log1p(value)), v.log1p(x));
  });
});
