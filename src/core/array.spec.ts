import {
  deepStrictEqual,
} from 'assert';

import { array } from './array';

describe('(v) array', () => {
  it('should work as expected', () => {
    const x = array([0, 0, 0]);

    deepStrictEqual(x, array([0, 0, 0]));
  });

  it('should work as expected in two dimensions', () => {
    const x = array([0, 0]);

    deepStrictEqual(x, array([0, 0]));
  });
});
