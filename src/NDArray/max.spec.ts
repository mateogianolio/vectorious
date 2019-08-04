import {
  strictEqual,
} from 'assert';

import { NDArray } from '.';

describe('max', () => {
  it('should find the maximum number in arrays', () => {
    const x: NDArray = new NDArray([1, 2, 3]);
    const y: NDArray = new NDArray([3, -1, 1]);
    const z: NDArray = new NDArray([2, 5, 1]);

    strictEqual(3, x.max());
    strictEqual(3, y.max());
    strictEqual(5, z.max());
  });

  it('should work as the static equivalent', () => {
    const x: NDArray = new NDArray([1, 2, 3]);
    const y: NDArray = new NDArray([3, -1, 1]);
    const z: NDArray = new NDArray([2, 5, 1]);

    strictEqual(3, NDArray.max(x));
    strictEqual(3, NDArray.max(y));
    strictEqual(5, NDArray.max(z));
  });
});
