import {
  strictEqual,
} from 'assert';

import { min } from './min';
import { array } from './array';

describe('(v) min', () => {
  it('should find the minimum number in arrays', () => {
    const x = array([1, 2, 3]);
    const y = array([3, -1, 1]);
    const z = array([2, 5, 1]);

    strictEqual(1, x.min());
    strictEqual(-1, y.min());
    strictEqual(1, z.min());
  });

  it('should work as the static equivalent', () => {
    const x = array([1, 2, 3]);
    const y = array([3, -1, 1]);
    const z = array([2, 5, 1]);

    strictEqual(1, min(x));
    strictEqual(-1, min(y));
    strictEqual(1, min(z));
  });
});
