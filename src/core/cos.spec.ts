import {
  deepStrictEqual,
} from 'assert';

import v = require('..');

describe('(v) cos', () => {
  it('should work as expected', () => {
    const x: v = v.random(3);

    deepStrictEqual(v.map(x, (value: number) => Math.cos(value)), x.cos());
  });

  it('should work as the static equivalent', () => {
    const x: v = v.random(3);

    deepStrictEqual(v.map(x, (value: number) => Math.cos(value)), v.cos(x));
  });
});
