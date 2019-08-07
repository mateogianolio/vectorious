import {
  deepStrictEqual,
} from 'assert';

import { NDArray } from '.';

describe('(NDArray) normalize', () => {
  it('should work as expected', () => {
    const x: NDArray = new NDArray([1, 1]);
    const y: NDArray = new NDArray([1 / Math.sqrt(2), 1 / Math.sqrt(2)]);

    deepStrictEqual(y, x.normalize());
  });

  it('should work as the static equivalent', () => {
    const x: NDArray = new NDArray([1, 1]);
    const y: NDArray = new NDArray([1 / Math.sqrt(2), 1 / Math.sqrt(2)]);

    deepStrictEqual(y, NDArray.normalize(x));
  });
});
