import {
  deepStrictEqual,
  throws,
} from 'assert';

import v = require('..');

describe('(v) magic', () => {
  it('should throw error if invalid size', () => {
    throws(() => { v.magic(-1); }, Error);
  });

  it('should work as expected', () => {
    deepStrictEqual(v.array([[8, 1, 6], [3, 5, 7], [4, 9, 2]]), v.magic(3));
  });
});
