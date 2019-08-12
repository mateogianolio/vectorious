import {
  deepStrictEqual,
  throws,
} from 'assert';

import v = require('..');

describe('(v) multiply', () => {
  it('should throw error if sizes do not match', () => {
    const x: v = v.array([[1, 2], [3, 4]]);
    const y: v = v.array([[1, 2]]);

    throws(() => { x.multiply(y); }, Error);
  });

  it('should work as expected', () => {
    const x: v = v.array([[1, 2]]);
    const y: v = v.array([[1], [2]]);
    const z: v = v.array([[5]]);
    const u: v = v.array([[1, 2], [2, 4]]);

    deepStrictEqual(z, x.copy().multiply(y));
    deepStrictEqual(u, y.copy().multiply(x));
  });

  it('should work as expected', () => {
    const x: v = v.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    const y: v = v.array([[ 30,  36,  42], [ 66,  81,  96], [102, 126, 150]]);

    deepStrictEqual(y, x.multiply(x));
  });

  it('should work as expected', () => {
    const x: v = v.array([[0, 1, 0], [1, 0, 0], [0, 0, 1]]);
    const y: v = v.array([[1, 3, 5], [2, 4, 7], [1, 1, 0]]);
    const z: v = v.array([[2, 4, 7], [1, 3, 5], [1, 1, 0]]);

    deepStrictEqual(z, x.multiply(y));
  });

  it('should work as the static equivalent', () => {
    const x: v = v.array([[1], [2], [3]]);
    const y: v = v.array([[1, 1, 1]]);

    deepStrictEqual(x.copy().multiply(y), v.multiply(x, y));
  });
});
