import {
  deepStrictEqual,
} from 'assert';

import { row_add } from './row_add';
import { array } from './array';

describe('(v) row_add', () => {
  it('should work as expected', () => {
    const x = array([[1, 2], [3, 4]]);
    const y = array([[31, 42], [3, 4]]);

    x.row_add(0, 1, 10);

    deepStrictEqual(y, x);
  });

  it('should work as the static equivalent', () => {
    const x = array([[1, 2], [3, 4]]);
    const y = array([[31, 42], [3, 4]]);

    deepStrictEqual(y, row_add(x, 0, 1, 10));
  });
});
