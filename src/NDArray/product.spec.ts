import {
  deepStrictEqual,
} from 'assert';

import { NDArray } from '.';

describe('product', () => {
  it('should work as expected', () => {
    const x: NDArray = new NDArray([[3, 2, 1]]);
    const y: NDArray = new NDArray([[1, 2, 3]]);

    deepStrictEqual(new NDArray([[3, 4, 3]]), x.product(y));
  });

  it('should work as the static equivalent', () => {
    const x: NDArray = new NDArray([[3, 2, 1]]);
    const y: NDArray = new NDArray([[1, 2, 3]]);

    deepStrictEqual(new NDArray([[3, 4, 3]]), NDArray.product(x, y));
  });
});
