import {
  deepStrictEqual,
} from 'assert';

import v = require('..');

describe('(v) round', () => {
  it('should work as expected', () => {
    const x: v = v.random(3);

    deepStrictEqual(x.map((value: number) => Math.round(value)), x.round());
  });

  it('should work as the static equivalent', () => {
    const x: v = v.random(3);

    deepStrictEqual(x.map((value: number) => Math.round(value)), v.round(x));
  });
});
