import {
  deepStrictEqual,
} from 'assert';

import v = require('..');

describe('(v) sign', () => {
  it('should work as expected', () => {
    const x: v = v.random(3);

    deepStrictEqual(v.map(x, (value: number) => Math.sign(value)), x.sign());
  });

  it('should work as the static equivalent', () => {
    const x: v = v.random(3);

    deepStrictEqual(v.map(x, (value: number) => Math.sign(value)), v.sign(x));
  });
});
