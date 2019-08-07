import {
  deepStrictEqual,
  throws,
} from 'assert';

import { NDArray } from './';

describe('(NDArray) magic', () => {
  it('should throw error if invalid size', () => {
    throws(() => { NDArray.magic(-1); }, Error);
  });

  it('should work as expected', () => {
    deepStrictEqual(new NDArray([[8, 1, 6], [3, 5, 7], [4, 9, 2]]), NDArray.magic(3));
  });
});
