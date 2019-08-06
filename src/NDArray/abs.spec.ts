import {
  deepStrictEqual,
} from 'assert';

import { NDArray } from '.';

describe('(NDArray) abs', () => {
  it('should work as expected', () => {
    const x: NDArray = NDArray.random(3);

    deepStrictEqual(x.map((value: number) => Math.abs(value)), x.abs());
  });

  it('should work as the static equivalent', () => {
    const x: NDArray = NDArray.random(3);

    deepStrictEqual(x.map((value: number) => Math.abs(value)), NDArray.abs(x));
  });
});
