import {
  deepStrictEqual,
} from 'assert';

import { NDArray } from './';

describe('(NDArray) diagonal', () => {
  it('should work as expected', () => {
    const x: NDArray = new NDArray([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);

    deepStrictEqual(new NDArray([1, 5, 9]), x.diagonal());
  });

  it('should work as the static equivalent', () => {
    const x: NDArray = new NDArray([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);

    deepStrictEqual(x.copy().diagonal(), NDArray.diagonal(x));
  });
});
