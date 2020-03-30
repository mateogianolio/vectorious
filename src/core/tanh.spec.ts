import {
  deepStrictEqual,
} from 'assert';

import v = require('..');

describe('(v) tanh', () => {
  it('should work as expected', () => {
    const x: v = v.random(3);

    deepStrictEqual(v.map(x, (value: number) => Math.tanh(value)), x.tanh());
  });

  it('should work as the static equivalent', () => {
    const x: v = v.random(3);

    deepStrictEqual(v.map(x, (value: number) => Math.tanh(value)), v.tanh(x));
  });
});
