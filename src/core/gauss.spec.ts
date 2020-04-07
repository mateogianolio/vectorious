import {
  deepStrictEqual,
} from 'assert';

import { gauss } from './gauss';
import { array } from './array';

describe('(v) gauss', () => {
  it('should work as expected', () => {
    const x = array([[1, 2, 3], [3, 4, 5]]);
    const y = array([[1, 0, -1], [-0, 1, 2]]);

    deepStrictEqual(y, x.gauss());
  });

  it('should work as expected', () => {
    const x = array([[1, 2, -1, -4], [2, 3, -1, -11], [-2, 0, -3, 22]]);
    const y = array([[1, 0, 0, -8], [-0, 1, 0, 1], [-0, -0, 1, -2]]);

    deepStrictEqual(y, x.gauss());
  });

  it('should work as the static equivalent', () => {
    const x = array([[1, 2, 3], [3, 4, 5]]);

    deepStrictEqual(x.copy().gauss(), gauss(x));
  });
});
