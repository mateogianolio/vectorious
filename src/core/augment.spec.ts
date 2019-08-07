import {
  deepStrictEqual,
  throws,
} from 'assert';

import { NDArray } from './';

describe('(NDArray) augment', () => {
  it('should return current matrix when combined with empty matrix', () => {
    const x: NDArray = new NDArray([[1, 2], [3, 4]]);

    deepStrictEqual(x, x.augment(new NDArray()));
  });

  it('should work as expected', () => {
    const x: NDArray = new NDArray([[1, 2], [3, 4]]);
    const y: NDArray = new NDArray([[5, 6], [7, 8]]);
    const z: NDArray = new NDArray([[1, 2, 5, 6], [3, 4, 7, 8]]);

    deepStrictEqual(z, x.augment(y));
  });

  it('should throw error when rows do not match', () => {
    const x: NDArray = new NDArray([[1, 2], [3, 4]]);

    throws(() => { x.augment(new NDArray([[1]])); }, Error);
  });

  it('should work as the static equivalent', () => {
    const x: NDArray = new NDArray([[1, 1, 1]]);
    const y: NDArray = new NDArray([[1, 2, 3]]);

    deepStrictEqual(x.copy().augment(y), NDArray.augment(x, y));
  });
});
