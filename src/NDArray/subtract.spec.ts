import {
  deepStrictEqual,
  throws,
} from 'assert';

import { NDArray } from '.';

describe('(NDArray) subtract', () => {
  it('should return empty vector if subtracting two empty vectors', () => {
    const x: NDArray = new NDArray();
    const y: NDArray = new NDArray();

    deepStrictEqual(new NDArray(), x.subtract(y));
  });

  it('should throw error if sizes do not match', () => {
    const x: NDArray = new NDArray([1]);
    const y: NDArray = new NDArray([1, 2]);

    throws(() => { x.subtract(y); }, Error);
  });

  it('should produce NDArray(-3, -3, -3) from NDArray(1, 2, 3) and NDArray(4, 5, 6)', () => {
    const x: NDArray = new NDArray([1, 2, 3]);
    const y: NDArray = new NDArray([4, 5, 6]);
    const z: NDArray = new NDArray([-3, -3, -3]);

    deepStrictEqual(z, x.subtract(y));
  });

  it('should work as the static equivalent', () => {
    const x: NDArray = new NDArray([1, 2, 3]);
    const y: NDArray = new NDArray([4, 5, 6]);
    const z: NDArray = new NDArray([-3, -3, -3]);

    deepStrictEqual(z, NDArray.subtract(x, y));
  });
});
