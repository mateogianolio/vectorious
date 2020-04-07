import {
  deepStrictEqual,
} from 'assert';

import { product } from './product';
import { array } from './array';

describe('(v) product', () => {
  it('should work as expected', () => {
    const x = array([[3, 2, 1]]);
    const y = array([[1, 2, 3]]);

    deepStrictEqual(array([[3, 4, 3]]), x.product(y));
  });

  it('should work as the static equivalent', () => {
    const x = array([[3, 2, 1]]);
    const y = array([[1, 2, 3]]);

    deepStrictEqual(array([[3, 4, 3]]), product(x, y));
  });
});
