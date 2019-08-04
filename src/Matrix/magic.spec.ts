import {
  deepStrictEqual,
  throws,
} from 'assert';

import { Matrix } from './';

describe('magic', () => {
  it('should throw error if invalid size', () => {
    throws(() => { Matrix.magic(-1); }, Error);
  });

  it('should work as expected', () => {
    deepStrictEqual(new Matrix([[8, 1, 6], [3, 5, 7], [4, 9, 2]]), Matrix.magic(3));
  });
});
