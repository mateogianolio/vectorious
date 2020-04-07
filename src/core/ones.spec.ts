import {
  deepStrictEqual,
} from 'assert';

import { ones } from './ones';
import { array } from './array';

describe('(v) ones', () => {
  it('should work as expected', () => {
    const x = array([1, 1, 1]);

    deepStrictEqual(x, ones(3));
  });

  it('should work as expected in two dimensions', () => {
    const x = array([[1, 1], [1, 1]]);

    deepStrictEqual(x, ones(2, 2));
  });
});
