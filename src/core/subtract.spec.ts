import {
  deepStrictEqual,
  throws,
} from 'assert';

import v = require('..');

describe('(v) subtract', () => {
  it('should return empty vector if subtracting two empty vectors', () => {
    const x: v = v.array();
    const y: v = v.array();

    deepStrictEqual(v.array(), x.subtract(y));
  });

  it('should throw error if sizes do not match', () => {
    const x: v = v.array([1]);
    const y: v = v.array([1, 2]);

    throws(() => { x.subtract(y); }, Error);
  });

  it('should produce v(-3, -3, -3) from v(1, 2, 3) and v(4, 5, 6)', () => {
    const x: v = v.array([1, 2, 3]);
    const y: v = v.array([4, 5, 6]);
    const z: v = v.array([-3, -3, -3]);

    deepStrictEqual(z, x.subtract(y));
  });

  it('should work as the static equivalent', () => {
    const x: v = v.array([1, 2, 3]);
    const y: v = v.array([4, 5, 6]);
    const z: v = v.array([-3, -3, -3]);

    deepStrictEqual(z, v.subtract(x, y));
  });
});
