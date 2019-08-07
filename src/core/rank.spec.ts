import {
  deepStrictEqual,
  strictEqual,
} from 'assert';

import { NDArray } from './';

describe('(NDArray) rank', () => {
  it('should work as expected', () => {
    const x: NDArray = new NDArray([[1, 2, 1], [-2, -3, 1], [3, 5, 0]]);
    const y: NDArray = new NDArray([[1, 1, 1], [2, 2, 2], [3, 3, 3]]);
    const z: NDArray = new NDArray([[0, 0, 0], [0, 0, 0]]);

    strictEqual(x.rank(), 2);
    strictEqual(y.rank(), 1);
    strictEqual(z.rank(), 0);
  });

  it('should work as the static equivalent', () => {
    const x: NDArray = new NDArray([[1, 1, 1]]);

    deepStrictEqual(x.copy().rank(), NDArray.rank(x));
  });
});
