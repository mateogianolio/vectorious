import {
  deepStrictEqual,
  throws,
} from 'assert';

import v = require('..');

describe('(v) project', () => {
  it('should throw error if sizes do not match', () => {
    const x: v = v.array([1]);
    const y: v = v.array([1, 2]);

    throws(() => { x.project(y); }, Error);
  });

  it('should work as expected', () => {
    const x: v = v.array([2, 1]);
    const y: v = v.array([-3, 4]);
    const z: v = v.array([6 / 25, -8 / 25]);

    deepStrictEqual(z, x.project(y));
  });

  it('should work as the static equivalent', () => {
    const x: v = v.array([2, 1]);
    const y: v = v.array([-3, 4]);
    const z: v = v.array([6 / 25, -8 / 25]);

    deepStrictEqual(z, v.project(x, y));
  });
});
