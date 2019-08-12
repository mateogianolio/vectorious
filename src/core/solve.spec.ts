import {
  deepStrictEqual,
} from 'assert';

import v = require('..');

describe('(v) solve', () => {
  it('should work as expected', () => {
    const x: v = v.array([[1, 3, 5], [2, 4, 7], [1, 1, 0]]);
    const y: v = v.array([[1], [3], [5]]);
    const z: v = v.array([[3.25], [1.75], [-1.5]]);

    deepStrictEqual(z, x.solve(y));
  });

  it('should work as the static equivalent', () => {
    const x: v = v.array([[1, 3, 5], [2, 4, 7], [1, 1, 0]]);
    const y: v = v.array([[1], [3], [5]]);
    const z: v = v.array([[3.25], [1.75], [-1.5]]);

    deepStrictEqual(z, v.solve(x, y));
  });
});
