import {
  deepStrictEqual,
  throws,
} from 'assert';

import { subtract } from './subtract';
import { array } from './array';

describe('(v) subtract', () => {
  it('should return empty vector if subtracting two empty vectors', () => {
    const x = array();
    const y = array();

    deepStrictEqual(array(), x.subtract(y));
  });

  it('should throw error if sizes do not match', () => {
    const x = array([1]);
    const y = array([1, 2]);

    throws(() => { x.subtract(y); }, Error);
  });

  it('should produce v(-3, -3, -3) from v(1, 2, 3) and v(4, 5, 6)', () => {
    const x = array([1, 2, 3]);
    const y = array([4, 5, 6]);
    const z = array([-3, -3, -3]);

    deepStrictEqual(z, x.subtract(y));
  });

  it('should work as the static equivalent', () => {
    const x = array([1, 2, 3]);
    const y = array([4, 5, 6]);
    const z = array([-3, -3, -3]);

    deepStrictEqual(z, subtract(x, y));
  });
});
