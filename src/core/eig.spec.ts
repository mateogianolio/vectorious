import {
  deepStrictEqual,
  throws,
} from 'assert';

import v = require('..');

describe('(v) eig', () => {
  it('should throw error if matrix is not square', () => {
    const x: v = v.array([[1, 2]]);

    throws(() => { x.eig(); }, Error);
  });

  it('should work as expected', () => {
    const x: v = v.array([
      [1, 0, 0],
      [0, 2, 0],
      [0, 0, 3],
    ]);
    const y: v = v.array([1, 2, 3]);
    const z: v = v.array([
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ]);

    const [e, E] = x.eig();

    deepStrictEqual(y, e);
    deepStrictEqual(z, E);
  });

  it('should work as the static equivalent', () => {
    const x: v = v.array([
      [1, 0, 0],
      [0, 2, 0],
      [0, 0, 3],
    ]);

    deepStrictEqual(x.copy().eig(), v.eig(x));
  });
});
