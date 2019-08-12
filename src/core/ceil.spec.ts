import {
  deepStrictEqual,
} from 'assert';

import v = require('..');

describe('(v) ceil', () => {
  it('should work as expected', () => {
    const x: v = v.random(3);

    deepStrictEqual(x.map((value: number) => Math.ceil(value)), x.ceil());
  });

  it('should work as the static equivalent', () => {
    const x: v = v.random(3);

    deepStrictEqual(x.map((value: number) => Math.ceil(value)), v.ceil(x));
  });
});
