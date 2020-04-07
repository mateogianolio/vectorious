import {
  deepStrictEqual,
  throws,
} from 'assert';

import { add } from './add';
import { array } from './array';

describe('(v) add', () => {
  it('should return empty vector if adding two empty vectors', () => {
    const x = array();
    const y = array();

    deepStrictEqual(array(), x.add(y));
  });

  it('should throw error if sizes do not match', () => {
    const x = array([1]);
    const y = array([1, 2]);

    throws(() => { x.add(y); }, Error);
  });

  it('should produce v([5, 7, 9]) from v([1, 2, 3]) and v([4, 5, 6])', () => {
    const x = array([1, 2, 3]);
    const y = array([4, 5, 6]);
    const z = array([5, 7, 9]);

    deepStrictEqual(z, x.add(y));
  });

  it('should work as the static equivalent', () => {
    const x = array([1, 2, 3]);
    const y = array([4, 5, 6]);
    const z = array([5, 7, 9]);

    deepStrictEqual(z, add(x, y));
  });
});
