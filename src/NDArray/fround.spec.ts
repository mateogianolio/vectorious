import {
  deepStrictEqual,
} from 'assert';

import { NDArray } from '.';

describe('fround', () => {
  it('should work as expected', () => {
    const x: NDArray = NDArray.random(3);

    deepStrictEqual(x.map((value: number) => Math.fround(value)), x.fround());
  });

  it('should work as the static equivalent', () => {
    const x: NDArray = NDArray.random(3);

    deepStrictEqual(x.map((value: number) => Math.fround(value)), NDArray.fround(x));
  });
});
