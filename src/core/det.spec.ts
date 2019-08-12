import {
  deepStrictEqual,
  strictEqual,
  throws,
} from 'assert';

import v = require('..');

describe('(v) det', () => {
  it('should throw error if matrix is not square', () => {
    const x: v = v.array([[0, 0]]);
    throws(() => { x.det(); }, Error);
  });

  it('should work as expected', () => {
    const x: v = v.array([[1, 2], [3, 4]]);
    const y: v = v.array([[1, 5, 6], [3.3, 9, 10], [7, 9, 3.2]]);
    const z: v = v.array([[2, -1, 1], [-1, -2, 1], [-1, -1, -1]]);

    strictEqual(-2, Number(x.det().toFixed(2)));
    strictEqual(36.2, Number(y.det().toFixed(2)));
    strictEqual(7, Number(z.det().toFixed(2)));
  });

  it('should work as the static equivalent', () => {
    const x: v = v.array([[1, 2], [3, 4]]);

    deepStrictEqual(x.copy().det(), v.det(x));
  });
});
