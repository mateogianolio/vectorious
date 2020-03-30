import {
  deepStrictEqual,
} from 'assert';

import v = require('..');

describe('(v) cbrt', () => {
  it('should work as expected', () => {
    const x: v = v.random(3);

    deepStrictEqual(v.map(x, (value: number) => Math.cbrt(value)), x.cbrt());
  });

  it('should work as the static equivalent', () => {
    const x: v = v.random(3);

    deepStrictEqual(v.map(x, (value: number) => Math.cbrt(value)), v.cbrt(x));
  });
});
