import {
  deepStrictEqual,
} from 'assert';

import { diagonal } from './diagonal';
import { array } from './array';

describe('(v) diagonal', () => {
  it('should work as expected', () => {
    const x = array([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);

    deepStrictEqual(array([1, 5, 9]), x.diagonal());
  });

  it('should work as the static equivalent', () => {
    const x = array([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);

    deepStrictEqual(x.copy().diagonal(), diagonal(x));
  });
});
