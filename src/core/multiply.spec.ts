import { ok, throws } from 'assert';

import { equals } from './equals';
import { multiply } from './multiply';
import { array } from './array';

describe('(v) multiply', () => {
  it('should throw error if sizes do not match', () => {
    const x = array([
      [1, 2],
      [3, 4],
    ]);
    const y = array([[1, 2]]);

    throws(() => {
      x.multiply(y);
    }, Error);
  });

  it('should multiply row and column matrices correctly', () => {
    const x = array([[1, 2]]);
    const y = array([[1], [2]]);
    const z = array([[5]]);
    const u = array([
      [1, 2],
      [2, 4],
    ]);

    ok(equals(z, x.multiply(y)));
    ok(equals(u, y.multiply(x)));
  });

  it('should rectangular matrices correctly', () => {
    const x = array([
      [1, 2],
      [3, 4],
      [5, 6],
    ]);
    const y = array([[1, 2, 3], [4, 5, 6]]);
    const z = array([
      [9, 12, 15],
      [19, 26, 33],
      [29, 40, 51]
    ]);
    const u = array([
      [22, 28],
      [49, 64],
    ]);

    ok(equals(z, x.multiply(y)));
    ok(equals(u, y.multiply(x)));
  });

  it('should multiply a square matrix by itself as expected', () => {
    const x = array([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]);
    const y = array([
      [30, 36, 42],
      [66, 81, 96],
      [102, 126, 150],
    ]);

    ok(equals(y, x.multiply(x)));
  });

  it('should multiply square matrices correctly', () => {
    const x = array([
      [0, 1, 0],
      [1, 0, 0],
      [0, 0, 1],
    ]);
    const y = array([
      [1, 3, 5],
      [2, 4, 7],
      [1, 1, 0],
    ]);
    const z = array([
      [2, 4, 7],
      [1, 3, 5],
      [1, 1, 0],
    ]);

    ok(equals(z, x.multiply(y)));
  });

  it('should work as the static equivalent', () => {
    const x = array([[1], [2], [3]]);
    const y = array([[1, 1, 1]]);

    ok(equals(x.multiply(y), multiply(x, y)));
  });
});
