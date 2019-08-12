import {
  deepStrictEqual,
} from 'assert';

import v = require('..');

describe('(v) reciprocal', () => {
  it('should work as expected', () => {
    const x: v = v.random(3);

    deepStrictEqual(x.map((value: number) => 1 / value), x.reciprocal());
  });

  it('should work as the static equivalent', () => {
    const x: v = v.random(3);

    deepStrictEqual(x.map((value: number) => 1 / value), v.reciprocal(x));
  });
});
