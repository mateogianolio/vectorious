import {
  strictEqual,
} from 'assert';

import { NDArray } from '.';

describe('(NDArray) min', () => {
  it('should find the minimum number in arrays', () => {
    const x: NDArray = new NDArray([1, 2, 3]);
    const y: NDArray = new NDArray([3, -1, 1]);
    const z: NDArray = new NDArray([2, 5, 1]);

    strictEqual(1, x.min());
    strictEqual(-1, y.min());
    strictEqual(1, z.min());
  });

  it('should work as the static equivalent', () => {
    const x: NDArray = new NDArray([1, 2, 3]);
    const y: NDArray = new NDArray([3, -1, 1]);
    const z: NDArray = new NDArray([2, 5, 1]);

    strictEqual(1, NDArray.min(x));
    strictEqual(-1, NDArray.min(y));
    strictEqual(1, NDArray.min(z));
  });
});
