import {
  deepStrictEqual,
} from 'assert';

import v = require('..');

describe('(v) acos', () => {
  it('should work as expected', () => {
    const x: v = v.random(3);

    deepStrictEqual(v.map(x, (value: number) => Math.acos(value)), x.acos());
  });

  it('should work as the static equivalent', () => {
    const x: v = v.random(3);

    deepStrictEqual(v.map(x, (value: number) => Math.acos(value)), v.acos(x));
  });
});
