import {
  deepStrictEqual,
} from 'assert';

import v = require('..');

describe('(v) matrix', () => {
  it('should work as expected', () => {
    const x: v = v.array(new Float32Array([0, 0, 0]), { shape: [3, 1] });

    deepStrictEqual(x, v.matrix(3, 1));
  });

  it('should work as expected in two dimensions', () => {
    const x: v = v.array([[0, 0], [0, 0]]);

    deepStrictEqual(x, v.matrix(2, 2));
  });
});
