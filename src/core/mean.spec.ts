import {
  deepStrictEqual,
} from 'assert';

import v = require('..');

describe('(v) mean', () => {
  it('should work as expected', () => {
    const x: v = v.random(3);

    deepStrictEqual(x.reduce((acc: number, value: number) => acc + value, 0) / x.length, x.mean());
  });

  it('should work as the static equivalent', () => {
    const x: v = v.random(3);

    deepStrictEqual(x.reduce((acc: number, value: number) => acc + value, 0) / x.length, v.mean(x));
  });
});
