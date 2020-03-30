import {
  deepStrictEqual,
} from 'assert';

import v = require('..');

describe('(v) sin', () => {
  it('should work as expected', () => {
    const x: v = v.random(3);

    deepStrictEqual(v.map(x, (value: number) => Math.sin(value)), x.sin());
  });

  it('should work as the static equivalent', () => {
    const x: v = v.random(3);

    deepStrictEqual(v.map(x, (value: number) => Math.sin(value)), v.sin(x));
  });
});
