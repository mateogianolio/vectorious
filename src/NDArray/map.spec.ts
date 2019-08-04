import {
  deepStrictEqual,
} from 'assert';

import { NDArray } from '.';

describe('map', () => {
  it('should work as expected', () => {
    const x: NDArray = new NDArray([1, 2, 3]);

    deepStrictEqual(new NDArray([1, 4, 9]), x.map((value: number) => value * value));
  });

  it('should work as the static equivalent', () => {
    const x: NDArray = new NDArray([1, 2, 3]);

    deepStrictEqual(new NDArray([1, 4, 9]), NDArray.map(x, (value: number) => value * value));
  });
});
