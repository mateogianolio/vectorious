import {
  ok,
  throws,
} from 'assert';

import { equals } from './equals';
import { add } from './add';
import { array } from './array';

describe('(v) add', () => {
  it('should return empty vector if adding two empty vectors', () => {
    const x = array();
    const y = array();

    ok(equals(array(), x.add(y)));
  });

  it('should throw error if shapes cannot be broadcast together', () => {
    const x = array([1, 2, 3]);
    const y = array([10, 11]);

    throws(() => { x.add(y); }, Error);
  });

  it('should produce v([5, 7, 9]) from v([1, 2, 3]) and v([4, 5, 6])', () => {
    const x = array([1, 2, 3]);
    const y = array([4, 5, 6]);
    const z = array([5, 7, 9]);

    ok(equals(z, x.add(y)));
  });

  it('should product v([11, 12, 13]) from v([1, 2, 3]) and v([10])', () => {
    const x = array([1, 2, 3]);
    const y = array([10]);
    const z = array([11, 12, 13]);

    ok(equals(z, x.add(y)))
  });

  it('should work as the static equivalent', () => {
    const x = array([1, 2, 3]);
    const y = array([4, 5, 6]);
    const z = array([5, 7, 9]);

    ok(equals(z, add(x, y)));
  });
});
