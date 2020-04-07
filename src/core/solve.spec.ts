import {
  deepStrictEqual,
} from 'assert';

import { solve } from './solve';
import { array } from './array';

describe('(v) solve', () => {
  it('should work as expected', () => {
    const x = array([[1, 3, 5], [2, 4, 7], [1, 1, 0]]);
    const y = array([[1], [3], [5]]);
    const z = array([[3.25], [1.75], [-1.5]]);

    deepStrictEqual(z, x.solve(y));
  });

  it('should work as the static equivalent', () => {
    const x = array([[1, 3, 5], [2, 4, 7], [1, 1, 0]]);
    const y = array([[1], [3], [5]]);
    const z = array([[3.25], [1.75], [-1.5]]);

    deepStrictEqual(z, solve(x, y));
  });
});
