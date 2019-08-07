import {
  strictEqual,
} from 'assert';

import { NDArray } from './';

describe('(NDArray) trace', () => {
  it('should work as expected', () => {
    const x: NDArray = new NDArray([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    const y: NDArray = new NDArray([[1, 2], [3, 4]]);

    strictEqual(15, x.trace());
    strictEqual(5, y.trace());
  });

  it('should work as the static equivalent', () => {
    const x: NDArray = new NDArray([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    const y: NDArray = new NDArray([[1, 2], [3, 4]]);

    strictEqual(15, NDArray.trace(x));
    strictEqual(5, NDArray.trace(y));
  });
});
