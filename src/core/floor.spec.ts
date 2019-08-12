import {
  deepStrictEqual,
} from 'assert';

import v = require('..');

describe('(v) floor', () => {
  it('should work as expected', () => {
    const x: v = v.random(3);

    deepStrictEqual(x.map((value: number) => Math.floor(value)), x.floor());
  });

  it('should work as the static equivalent', () => {
    const x: v = v.random(3);

    deepStrictEqual(x.map((value: number) => Math.floor(value)), v.floor(x));
  });
});
