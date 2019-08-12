import {
  deepStrictEqual,
} from 'assert';

import v = require('..');

describe('(v) sqrt', () => {
  it('should work as expected', () => {
    const x: v = v.random(3);

    deepStrictEqual(x.map((value: number) => Math.sqrt(value)), x.sqrt());
  });

  it('should work as the static equivalent', () => {
    const x: v = v.random(3);

    deepStrictEqual(x.map((value: number) => Math.sqrt(value)), v.sqrt(x));
  });
});
