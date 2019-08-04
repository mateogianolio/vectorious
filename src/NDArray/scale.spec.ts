import {
  deepStrictEqual,
} from 'assert';

import { NDArray } from '.';

describe('scale', () => {
  it('should scale NDArray(1, 2, 3) by 2 to NDArray(2, 4, 6)', () => {
    const x: NDArray = new NDArray([1, 2, 3]);
    const y: NDArray = new NDArray([2, 4, 6]);

    deepStrictEqual(y, x.scale(2));
  });

  it('should work as the static equivalent', () => {
    const x: NDArray = new NDArray([1, 2, 3]);
    const y: NDArray = new NDArray([2, 4, 6]);

    deepStrictEqual(y, NDArray.scale(x, 2));
  });
});
