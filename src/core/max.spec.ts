import { strictEqual } from 'assert';

import { max } from './max';
import { array } from './array';

describe('(v) max', () => {
  it('should find the maximum number in arrays', () => {
    const x = array([1, 2, 3]);
    const y = array([3, -1, 1]);
    const z = array([2, 5, 1]);

    strictEqual(3, x.max());
    strictEqual(3, y.max());
    strictEqual(5, z.max());
  });

  it('should work as the static equivalent', () => {
    const x = array([1, 2, 3]);
    const y = array([3, -1, 1]);
    const z = array([2, 5, 1]);

    strictEqual(3, max(x));
    strictEqual(3, max(y));
    strictEqual(5, max(z));
  });
});
