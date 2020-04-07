import {
  deepStrictEqual,
  throws,
} from 'assert';

import { augment } from './augment';
import { array } from './array';

describe('(v) augment', () => {
  it('should return current matrix when combined with empty matrix', () => {
    const x = array([[1, 2], [3, 4]]);

    deepStrictEqual(x, x.augment(array()));
  });

  it('should work as expected', () => {
    const x = array([[1, 2], [3, 4]]);
    const y = array([[5, 6], [7, 8]]);
    const z = array([[1, 2, 5, 6], [3, 4, 7, 8]]);

    deepStrictEqual(z, x.augment(y));
  });

  it('should throw error when rows do not match', () => {
    const x = array([[1, 2], [3, 4]]);

    throws(() => { x.augment(array([[1]])); }, Error);
  });

  it('should work as the static equivalent', () => {
    const x = array([[1, 1, 1]]);
    const y = array([[1, 2, 3]]);

    deepStrictEqual(x.copy().augment(y), augment(x, y));
  });
});
