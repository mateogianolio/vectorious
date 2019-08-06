import {
  deepStrictEqual,
} from 'assert';

import { NDArray } from '.';

describe('(NDArray) slice', () => {
  it('should work as expected', () => {
    const x: NDArray = new NDArray([-1, -2, 3, 4]);

    deepStrictEqual(new NDArray([-1, 3]), x.slice(0, 4, 2));
  });

  it('should work as expected', () => {
    const x: NDArray = new NDArray([-1, -2, 3, 4]);

    deepStrictEqual(new NDArray([-2, 3]), x.slice(1, 3));
  });

  it('should work as the static equivalent', () => {
    const x: NDArray = new NDArray([-1, -2, 3, 4]);

    deepStrictEqual(new NDArray([-1, 3]), NDArray.slice(x, 0, 4, 2));
  });
});
