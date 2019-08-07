import {
  strictEqual,
} from 'assert';

import { NDArray } from '.';

describe('(NDArray) angle', () => {
  it('should work as expected', () => {
    const x: NDArray = new NDArray([1, 0]);
    const y: NDArray = new NDArray([0, 1]);

    strictEqual(Math.PI / 2, x.angle(y));
  });

  it('should work as the static equivalent', () => {
    const x: NDArray = new NDArray([1, 0]);
    const y: NDArray = new NDArray([0, 1]);

    strictEqual(Math.PI / 2, NDArray.angle(x, y));
  });
});
