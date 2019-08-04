import {
  deepStrictEqual,
  throws,
} from 'assert';

import { NDArray } from '.';

describe('add', () => {
  it('should return empty vector if adding two empty vectors', () => {
    const x: NDArray = new NDArray();
    const y: NDArray = new NDArray();

    deepStrictEqual(new NDArray(), x.add(y));
  });

  it('should throw error if sizes do not match', () => {
    const x: NDArray = new NDArray([1]);
    const y: NDArray = new NDArray([1, 2]);

    throws(() => { x.add(y); }, Error);
  });

  it('should produce NDArray([5, 7, 9]) from NDArray([1, 2, 3]) and NDArray([4, 5, 6])', () => {
    const x: NDArray = new NDArray([1, 2, 3]);
    const y: NDArray = new NDArray([4, 5, 6]);
    const z: NDArray = new NDArray([5, 7, 9]);

    deepStrictEqual(z, x.add(y));
  });

  it('should work as the static equivalent', () => {
    const x: NDArray = new NDArray([1, 2, 3]);
    const y: NDArray = new NDArray([4, 5, 6]);
    const z: NDArray = new NDArray([5, 7, 9]);

    deepStrictEqual(z, NDArray.add(x, y));
  });
});
