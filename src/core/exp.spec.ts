import {
  deepStrictEqual,
} from 'assert';

import v = require('..');

describe('(v) exp', () => {
  it('should work as expected', () => {
    const x: v = v.random(3);

    deepStrictEqual(x.map((value: number) => Math.exp(value)), x.exp());
  });

  it('should work as the static equivalent', () => {
    const x: v = v.random(3);

    deepStrictEqual(x.map((value: number) => Math.exp(value)), v.exp(x));
  });
});
