import {
  deepStrictEqual,
} from 'assert';

import { NDArray } from '.';

describe('(NDArray) fill', () => {
  it('should work as expected', () => {
    const x: NDArray = new NDArray([1, 1, 1]);
    const y: NDArray = new NDArray([0, 0, 0]);

    deepStrictEqual(x, y.fill(1));
  });

  it('should work as expected with function argument', () => {
    const x: NDArray = new NDArray([0, 1, 2]);
    const y: NDArray = new NDArray([0, 0, 0]);

    deepStrictEqual(x, y.fill((index: number) => index));
  });

  it('should work as the static equivalent', () => {
    const x: NDArray = new NDArray([1, 1, 1]);
    const y: NDArray = new NDArray([0, 0, 0]);

    deepStrictEqual(x, NDArray.fill(y, 1));
  });
});
