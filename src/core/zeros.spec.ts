import {
  deepStrictEqual,
} from 'assert';

import { NDArray } from '.';

describe('(NDArray) zeros', () => {
  it('should work as expected', () => {
    const x: NDArray = new NDArray([0, 0, 0]);

    deepStrictEqual(x, NDArray.zeros(3));
  });

  it('should work as expected in two dimensions', () => {
    const x: NDArray = new NDArray([[0, 0], [0, 0]]);

    deepStrictEqual(x, NDArray.zeros(2, 2));
  });
});
