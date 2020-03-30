import {
  deepStrictEqual,
} from 'assert';

import v = require('..');

describe('(v) atan', () => {
  it('should work as expected', () => {
    const x: v = v.random(3);

    deepStrictEqual(v.map(x, (value: number) => Math.atan(value)), x.atan());
  });

  it('should work as the static equivalent', () => {
    const x: v = v.random(3);

    deepStrictEqual(v.map(x, (value: number) => Math.atan(value)), v.atan(x));
  });
});
