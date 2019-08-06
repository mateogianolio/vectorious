import {
  deepStrictEqual,
} from 'assert';

import { NDArray } from '.';

describe('(NDArray) eye', () => {
  it('should work as expected', () => {
    const x: NDArray = new NDArray([[1, 0, 0], [0, 1, 0], [0, 0, 1]]);

    deepStrictEqual(x, NDArray.eye(3));
  });
});
