import {
  deepStrictEqual,
} from 'assert';

import { NDArray } from '.';

describe('(NDArray) array', () => {
  it('should work as expected', () => {
    const x: NDArray = new NDArray([0, 0, 0]);

    deepStrictEqual(x, NDArray.array([0, 0, 0]));
  });

  it('should work as expected in two dimensions', () => {
    const x: NDArray = new NDArray([0, 0]);

    deepStrictEqual(x, NDArray.array([0, 0]));
  });
});
