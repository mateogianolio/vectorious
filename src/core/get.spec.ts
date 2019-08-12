import {
  strictEqual,
} from 'assert';

import v = require('..');

describe('(v) get', () => {
  it('should work as expected', () => {
    const x: v = v.random(3);

    strictEqual(x.data[0], x.get(0));
    strictEqual(x.data[1], x.get(1));
    strictEqual(x.data[2], x.get(2));
  });

  it('should work as expected', () => {
    const x: v = v.array([[[-1]], [[-2]], [[3]]]);

    strictEqual(x.data[0], x.get(0, 0, 0));
    strictEqual(x.data[1], x.get(1, 0, 0));
    strictEqual(x.data[2], x.get(2, 0, 0));
  });

  it('should work as the static equivalent', () => {
    const x: v = v.random(3);

    strictEqual(x.data[0], v.get(x, 0));
    strictEqual(x.data[1], v.get(x, 1));
    strictEqual(x.data[2], v.get(x, 2));
  });
});
