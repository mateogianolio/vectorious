import {
  deepStrictEqual,
} from 'assert';

import v = require('..');

describe('(v) tan', () => {
  it('should work as expected', () => {
    const x: v = v.random(3);

    deepStrictEqual(x.map((value: number) => Math.tan(value)), x.tan());
  });

  it('should work as the static equivalent', () => {
    const x: v = v.random(3);

    deepStrictEqual(x.map((value: number) => Math.tan(value)), v.tan(x));
  });
});
