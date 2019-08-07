import {
  deepStrictEqual,
} from 'assert';

import { NDArray } from './';

describe('(NDArray) solve', () => {
  it('should work as expected', () => {
    const x: NDArray = new NDArray([[1, 3, 5], [2, 4, 7], [1, 1, 0]]);
    const y: NDArray = new NDArray([[1], [3], [5]]);
    const z: NDArray = new NDArray([[3.25], [1.75], [-1.5]]);

    deepStrictEqual(z, x.solve(y));
  });

  it('should work as the static equivalent', () => {
    const x: NDArray = new NDArray([[1, 3, 5], [2, 4, 7], [1, 1, 0]]);
    const y: NDArray = new NDArray([[1], [3], [5]]);
    const z: NDArray = new NDArray([[3.25], [1.75], [-1.5]]);

    deepStrictEqual(z, NDArray.solve(x, y));
  });
});
