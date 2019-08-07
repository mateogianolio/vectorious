import {
  deepStrictEqual,
} from 'assert';

import { NDArray } from '.';

describe('(NDArray) floor', () => {
  it('should work as expected', () => {
    const x: NDArray = NDArray.random(3);

    deepStrictEqual(x.map((value: number) => Math.floor(value)), x.floor());
  });

  it('should work as the static equivalent', () => {
    const x: NDArray = NDArray.random(3);

    deepStrictEqual(x.map((value: number) => Math.floor(value)), NDArray.floor(x));
  });
});
