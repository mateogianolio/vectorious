import {
  deepStrictEqual,
} from 'assert';

import { NDArray } from '.';

describe('(NDArray) range', () => {
  it('should work as expected', () => {
    const x: NDArray = new NDArray([0, 1, 2]);

    deepStrictEqual(x, NDArray.range(0, 3));
  });

  it('should work as expected', () => {
    const x: NDArray = new NDArray([2, 1, 0]);

    deepStrictEqual(x, NDArray.range(2, -1));
  });

  it('should work as expected', () => {
    const x: NDArray = new NDArray([0, 0.5, 1, 1.5]);

    deepStrictEqual(x, NDArray.range(0, 0.5, 2));
  });
});
