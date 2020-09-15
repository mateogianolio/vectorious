import {
  strictEqual,
} from 'assert';

import { trace } from './trace';
import { array } from './array';

describe('(v) trace', () => {
  it('should work as expected', () => {
    const x = array([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    const y = array([[1, 2], [3, 4]]);

    strictEqual(15, x.trace());
    strictEqual(5, y.trace());
  });

  it('should work as the static equivalent', () => {
    const x = array([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    const y = array([[1, 2], [3, 4]]);

    strictEqual(15, trace(x));
    strictEqual(5, trace(y));
  });
});
