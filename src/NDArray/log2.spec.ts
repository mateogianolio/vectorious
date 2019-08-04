import {
  deepStrictEqual,
} from 'assert';

import { NDArray } from '.';

describe('log2', () => {
  it('should work as expected', () => {
    const x: NDArray = NDArray.random(3);

    deepStrictEqual(x.map((value: number) => Math.log2(value)), x.log2());
  });

  it('should work as the static equivalent', () => {
    const x: NDArray = NDArray.random(3);

    deepStrictEqual(x.map((value: number) => Math.log2(value)), NDArray.log2(x));
  });
});
