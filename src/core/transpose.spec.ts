import {
  deepStrictEqual,
} from 'assert';

import { NDArray } from './';

describe('(NDArray) transpose', () => {
  it('should work as expected', () => {
    const x: NDArray = new NDArray([[1, 2]]);
    const y: NDArray = new NDArray([[1], [2]]);

    deepStrictEqual(x, y.copy().T);
    deepStrictEqual(y, x.copy().T);
  });

  it('should work as expected', () => {
    const x: NDArray = new NDArray([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    const y: NDArray = new NDArray([[1, 4, 7], [2, 5, 8], [3, 6, 9]]);

    deepStrictEqual(x, y.copy().T);
    deepStrictEqual(y, x.copy().T);
  });

  it('should work as expected', () => {
    const x: NDArray = NDArray.random<NDArray>(2, 2);
    const y: NDArray = x.copy().T.T;

    deepStrictEqual(x, y);
  });

  it('should work as the static equivalent', () => {
    const x: NDArray = new NDArray([[1, 1, 1]]);

    deepStrictEqual(x.copy().T, NDArray.transpose(x));
  });
});
