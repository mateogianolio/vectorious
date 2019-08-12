import {
  deepStrictEqual,
  throws,
} from 'assert';

import v = require('..');

describe('(v) cross', () => {
  it('should work as expected', () => {
    const x: v = v.array([1, 2, 3]);
    const y: v = v.array([2, 3, 4]);

    deepStrictEqual(v.array([-1, 2, -1]), x.cross(y));
  });

  it('should throw an exception when lengths do not match', () => {
    const x: v = v.array([1, 2, 3, 4]);
    const y: v = v.array([5, 6, 7]);

    throws(() => { x.cross(y); }, Error);
  });

  it('should work as the static equivalent', () => {
    const x: v = v.array([1, 2, 3]);
    const y: v = v.array([2, 3, 4]);

    deepStrictEqual(v.array([-1, 2, -1]), v.cross(x, y));
  });
});
