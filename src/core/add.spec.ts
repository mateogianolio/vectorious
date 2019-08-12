import {
  deepStrictEqual,
  throws,
} from 'assert';

import v = require('..');

describe('(v) add', () => {
  it('should return empty vector if adding two empty vectors', () => {
    const x: v = v.array();
    const y: v = v.array();

    deepStrictEqual(v.array(), x.add(y));
  });

  it('should throw error if sizes do not match', () => {
    const x: v = v.array([1]);
    const y: v = v.array([1, 2]);

    throws(() => { x.add(y); }, Error);
  });

  it('should produce v([5, 7, 9]) from v([1, 2, 3]) and v([4, 5, 6])', () => {
    const x: v = v.array([1, 2, 3]);
    const y: v = v.array([4, 5, 6]);
    const z: v = v.array([5, 7, 9]);

    deepStrictEqual(z, x.add(y));
  });

  it('should work as the static equivalent', () => {
    const x: v = v.array([1, 2, 3]);
    const y: v = v.array([4, 5, 6]);
    const z: v = v.array([5, 7, 9]);

    deepStrictEqual(z, v.add(x, y));
  });
});
