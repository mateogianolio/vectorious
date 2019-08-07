import {
  deepStrictEqual,
} from 'assert';

import { NDArray } from './';

describe('(NDArray) gauss', () => {
  it('should work as expected', () => {
    const x: NDArray = new NDArray([[1, 2, 3], [3, 4, 5]]);
    const y: NDArray = new NDArray([[1, 0, -1], [-0, 1, 2]]);

    deepStrictEqual(y, x.gauss());
  });

  it('should work as expected', () => {
    const x: NDArray = new NDArray([[1, 2, -1, -4], [2, 3, -1, -11], [-2, 0, -3, 22]]);
    const y: NDArray = new NDArray([[1, 0, 0, -8], [-0, 1, 0, 1], [-0, -0, 1, -2]]);

    deepStrictEqual(y, x.gauss());
  });

  it('should work as the static equivalent', () => {
    const x: NDArray = new NDArray([[1, 2, 3], [3, 4, 5]]);

    deepStrictEqual(x.copy().gauss(), NDArray.gauss(x));
  });
});
