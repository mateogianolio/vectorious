import {
  strictEqual,
  throws,
} from 'assert';

import { NDArray } from '.';

describe('(NDArray) dot', () => {
  it('should throw error if sizes do not match', () => {
    const x: NDArray = new NDArray([1]);
    const y: NDArray = new NDArray([1, 2]);

    throws(() => { x.dot(y); }, Error);
  });

  it('should work as expected', () => {
    const x: NDArray = new NDArray([1, 2, 3]);
    const y: NDArray = new NDArray([4, 5, 6]);

    strictEqual(32, x.dot(y));
  });

  it('should work as the static equivalent', () => {
    const x: NDArray = new NDArray([1, 2, 3]);
    const y: NDArray = new NDArray([4, 5, 6]);

    strictEqual(32, NDArray.dot(x, y));
  });
});
