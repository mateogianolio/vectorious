import {
  deepStrictEqual,
} from 'assert';

import v = require('..');

describe('(v) log', () => {
  it('should work as expected', () => {
    const x: v = v.random(3);

    deepStrictEqual(x.map((value: number) => Math.log(value)), x.log());
  });

  it('should work as the static equivalent', () => {
    const x: v = v.random(3);

    deepStrictEqual(x.map((value: number) => Math.log(value)), v.log(x));
  });
});
