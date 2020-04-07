import {
  deepStrictEqual,
  throws,
} from 'assert';

import { magic } from './magic';
import { array } from './array';

describe('(v) magic', () => {
  it('should throw error if invalid size', () => {
    throws(() => { magic(-1); }, Error);
  });

  it('should work as expected', () => {
    deepStrictEqual(array([[8, 1, 6], [3, 5, 7], [4, 9, 2]]), magic(3));
  });
});
