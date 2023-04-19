import { strictEqual } from 'assert';

import { rank } from './rank';
import { array } from './array';

describe('(v) rank', () => {
  it('should work as expected', () => {
    const x = array([
      [1, 2, 1],
      [-2, -3, 1],
      [3, 5, 0],
    ]);
    const y = array([
      [1, 1, 1],
      [2, 2, 2],
      [3, 3, 3],
    ]);
    const z = array([
      [0, 0, 0],
      [0, 0, 0],
    ]);

    strictEqual(x.rank(), 2);
    strictEqual(y.rank(), 1);
    strictEqual(z.rank(), 0);
  });

  it('should work as the static equivalent', () => {
    const x = array([[1, 1, 1]]);

    strictEqual(x.copy().rank(), rank(x));
  });
});
