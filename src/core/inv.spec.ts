import {
  deepStrictEqual,
  throws,
} from 'assert';

import { NDArray } from './';

describe('(NDArray) inv', () => {
  it('should throw error if matrix is not square', () => {
    const x: NDArray = new NDArray([[1, 2]]);

    throws(() => { x.inv(); }, Error);
  });

  it('should work as expected', () => {
    const x: NDArray = new NDArray([
      [2, -1, 0],
      [-1, 2, -1],
      [0, -1, 2],
    ]);
    const y: NDArray = new NDArray([
      [3 / 4, 1 / 2, 1 / 4],
      [1 / 2, 1, 1 / 2],
      [1 / 4, 1 / 2, 3 / 4],
    ]);

    // Need to round result to avoid floating point rounding errors, e.g. 0.99999999994
    deepStrictEqual(y, x.inv().map((value: number) => Number(value.toFixed(2))));
  });

  it('should work as the static equivalent', () => {
    const x: NDArray = new NDArray([
      [2, -1, 0],
      [-1, 2, -1],
      [0, -1, 2],
    ]);

    deepStrictEqual(x.copy().inv(), NDArray.inv(x));
  });
});
