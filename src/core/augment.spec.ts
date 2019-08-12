import {
  deepStrictEqual,
  throws,
} from 'assert';

import v = require('..');

describe('(v) augment', () => {
  it('should return current matrix when combined with empty matrix', () => {
    const x: v = v.array([[1, 2], [3, 4]]);

    deepStrictEqual(x, x.augment(v.array()));
  });

  it('should work as expected', () => {
    const x: v = v.array([[1, 2], [3, 4]]);
    const y: v = v.array([[5, 6], [7, 8]]);
    const z: v = v.array([[1, 2, 5, 6], [3, 4, 7, 8]]);

    deepStrictEqual(z, x.augment(y));
  });

  it('should throw error when rows do not match', () => {
    const x: v = v.array([[1, 2], [3, 4]]);

    throws(() => { x.augment(v.array([[1]])); }, Error);
  });

  it('should work as the static equivalent', () => {
    const x: v = v.array([[1, 1, 1]]);
    const y: v = v.array([[1, 2, 3]]);

    deepStrictEqual(x.copy().augment(y), v.augment(x, y));
  });
});
