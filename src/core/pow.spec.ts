import {
  deepStrictEqual,
} from 'assert';

import v = require('..');

describe('(v) pow', () => {
  it('should work as expected', () => {
    const x: v = v.random(3);

    deepStrictEqual(v.map(x, (value: number) => Math.pow(value, 2)), x.pow(2));
  });

  it('should work as the static equivalent', () => {
    const x: v = v.random(3);

    deepStrictEqual(v.map(x, (value: number) => Math.pow(value, 2)), v.pow(x, 2));
  });
});
