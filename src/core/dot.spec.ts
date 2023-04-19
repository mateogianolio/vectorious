import { strictEqual } from 'assert';

import { dot } from './dot';
import { array } from './array';

describe('(v) dot', () => {
  it('should work as expected', () => {
    const x = array([1, 2, 3]);
    const y = array([4, 5, 6]);

    strictEqual(32, x.dot(y));
  });

  it('should work as the static equivalent', () => {
    const x = array([1, 2, 3]);
    const y = array([4, 5, 6]);

    strictEqual(32, dot(x, y));
  });
});
