import {
  deepStrictEqual,
} from 'assert';

import { NDArray } from './';

describe('(NDArray) row_add', () => {
  it('should work as expected', () => {
    const x: NDArray = new NDArray([[1, 2], [3, 4]]);
    const y: NDArray = new NDArray([[31, 42], [3, 4]]);

    x.row_add(0, 1, 10);

    deepStrictEqual(y, x);
  });

  it('should work as the static equivalent', () => {
    const x: NDArray = new NDArray([[1, 2], [3, 4]]);
    const y: NDArray = new NDArray([[31, 42], [3, 4]]);

    deepStrictEqual(y, NDArray.row_add(x, 0, 1, 10));
  });
});
