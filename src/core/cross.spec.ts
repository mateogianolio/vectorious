import { ok, throws } from 'assert';

import { equals } from './equals';
import { cross } from './cross';
import { array } from './array';

describe('(v) cross', () => {
  it('should work as expected', () => {
    const x = array([1, 2, 3]);
    const y = array([2, 3, 4]);

    ok(equals(array([-1, 2, -1]), x.cross(y)));
  });

  it('should throw an exception when lengths do not match', () => {
    const x = array([1, 2, 3, 4]);
    const y = array([5, 6, 7]);

    throws(() => {
      x.cross(y);
    }, Error);
  });

  it('should work as the static equivalent', () => {
    const x = array([1, 2, 3]);
    const y = array([2, 3, 4]);

    ok(equals(array([-1, 2, -1]), cross(x, y)));
  });
});
