import {
  deepStrictEqual,
} from 'assert';

import { NDArray } from '.';

describe('(NDArray) ones', () => {
  it('should work as expected', () => {
    const x: NDArray = new NDArray([1, 1, 1]);

    deepStrictEqual(x, NDArray.ones(3));
  });

  it('should work as expected in two dimensions', () => {
    const x: NDArray = new NDArray([[1, 1], [1, 1]]);

    deepStrictEqual(x, NDArray.ones(2, 2));
  });
});
