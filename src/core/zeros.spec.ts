import {
  deepStrictEqual,
} from 'assert';

import { zeros } from './zeros';
import { array } from './array';

describe('(v) zeros', () => {
  it('should work as expected', () => {
    const x = array([0, 0, 0]);

    deepStrictEqual(x, zeros(3));
  });

  it('should work as expected in two dimensions', () => {
    const x = array([[0, 0], [0, 0]]);

    deepStrictEqual(x, zeros(2, 2));
  });
});
