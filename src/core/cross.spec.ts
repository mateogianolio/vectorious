import {
  deepStrictEqual,
  throws,
} from 'assert';

import { NDArray } from '.';

describe('(NDArray) cross', () => {
  it('should work as expected', () => {
    const x: NDArray = new NDArray([1, 2, 3]);
    const y: NDArray = new NDArray([2, 3, 4]);

    deepStrictEqual(new NDArray([-1, 2, -1]), x.cross(y));
  });

  it('should throw an exception when lengths do not match', () => {
    const x: NDArray = new NDArray([1, 2, 3, 4]);
    const y: NDArray = new NDArray([5, 6, 7]);

    throws(() => { x.cross(y); }, Error);
  });

  it('should work as the static equivalent', () => {
    const x: NDArray = new NDArray([1, 2, 3]);
    const y: NDArray = new NDArray([2, 3, 4]);

    deepStrictEqual(new NDArray([-1, 2, -1]), NDArray.cross(x, y));
  });
});
