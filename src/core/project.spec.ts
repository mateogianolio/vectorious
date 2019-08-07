import {
  deepStrictEqual,
  throws,
} from 'assert';

import { NDArray } from '.';

describe('(NDArray) project', () => {
  it('should throw error if sizes do not match', () => {
    const x: NDArray = new NDArray([1]);
    const y: NDArray = new NDArray([1, 2]);

    throws(() => { x.project(y); }, Error);
  });

  it('should work as expected', () => {
    const x: NDArray = new NDArray([2, 1]);
    const y: NDArray = new NDArray([-3, 4]);
    const z: NDArray = new NDArray([6 / 25, -8 / 25]);

    deepStrictEqual(z, x.project(y));
  });

  it('should work as the static equivalent', () => {
    const x: NDArray = new NDArray([2, 1]);
    const y: NDArray = new NDArray([-3, 4]);
    const z: NDArray = new NDArray([6 / 25, -8 / 25]);

    deepStrictEqual(z, NDArray.project(x, y));
  });
});
